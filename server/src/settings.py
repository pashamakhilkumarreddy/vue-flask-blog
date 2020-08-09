"""
Application configuration
"""

import os
from datetime import timedelta

class Config:
  """ Base Configuration """
  SECRET_KEY = os.environ.get('SECRET_KEY', '4xwn7VoAq9kVtK3Btn81d72PJZojNvH2xhANCOFEe8Q')
  APP_DIR = os.path.abspath(os.path.dirname(__file__))
  PROJECT_DIR = os.path.abspath(os.path.join(APP_DIR, os.pardir))
  BCRYPT_LOG_ROUNDS = 12
  JWT_ALGORITHM = 'HS256'
  CORS_ORIGIN_WHITELIST = []
  
class ProdConfig(Config):
  """ Production Configuration """
  ENV = 'prod'
  DEBUG = False
  DATABASE_URI = os.environ.get('DATABASE_URL', '')
  DB_HOST = os.getenv('DB_HOST', '')
  DB_PORT = os.getenv('DB_PORT', '27017')
  DB_NAME = os.getenv('DB_NAME', '')
  DB_USER = os.getenv('DB_USER', '')
  DB_PASSWORD = os.getenv('DB_PASSWORD', '')
  
class DevConfig(Config):
  """ Development Configuration """
  ENV = 'dev'
  DEBUG = True
  DB_HOST = os.environ.get('DB_HOST', 'localhost')
  DB_PORT = os.environ.get('DB_PORT', '27017')
  DB_NAME = os.environ.get('DB_NAME', 'test')
  DB_USER = os.environ.get('DB_USER', 'test')
  DB_PASSWORD = os.environ.get('DB_PASSWORD', 'test')
  
class TestConfig(Config):
  TESTING = True
  DEBUG = True
  BCRYPT_LOG_ROUNDS = 4