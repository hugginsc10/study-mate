from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import Config
from flask_bcrypt import Bcrypt


app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)
bcrypt = Bcrypt(app)
CORS(app)


from models import User, Deck, Flashcard, Tag, Progress


from api.auth import auth_bp
from api.decks import decks_bp
from api.flashcards import flashcards_bp
from api.tags import tags_bp
from api.progress import progress_bp

app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(decks_bp, url_prefix='/api/decks')
app.register_blueprint(flashcards_bp, url_prefix='/api/flashcards')
app.register_blueprint(tags_bp, url_prefix='/api/tags')
app.register_blueprint(progress_bp, url_prefix='/api/progress')

@app.route('/')
def hello_world():
    return jsonify(message="Welcome to the Flashcard API")

@app.errorhandler(404)
def not_found(error):
    return jsonify(error="Not found"), 404

@app.errorhandler(500)
def internal_error(error):
    db.session.rollback()
    return jsonify(error="Internal server error"), 500

if __name__ == '__main__':
    app.run(debug=True)