from flask import Flask, jsonify, request
import random

app = Flask(__name__)

@app.route('/generate_melody', methods=['GET'])
def generate_melody():
    emotion = request.args.get('emotion', 'calm')  # Emoção como parâmetro
    melody = generate_music(emotion)
    return jsonify({'melody': melody})

def generate_music(emotion):
    """Função simples para gerar uma melodia com base na emoção"""
    progressions = {
        'calm': ['Cmaj7', 'Am7', 'Dm7', 'G7'],
        'excited': ['C7', 'F7', 'G7', 'C7'],
        'sad': ['Am7', 'Dm7', 'Em7', 'Am7']
    }
    progression = progressions.get(emotion, ['Cmaj7', 'Am7', 'Dm7', 'G7'])
    melody = [f"{chord} Note" for chord in progression]
    return melody

if __name__ == '__main__':
    app.run(debug=True)
