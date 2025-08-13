from gtts import gTTS
import os
import pandas as pd
import pykakasi

files = ['hiragana.csv', 'katakana.csv']
# Get the current script's directory
current_dir = os.path.dirname(os.path.abspath(__file__))
# Get the japanese directory path (two levels up)
japanese_dir = os.path.dirname(current_dir)

# create a directory for the output files
for file in files:
    dir_path = file.split('.')[0]
    output_dir = os.path.join(current_dir, dir_path)
    os.makedirs(output_dir, exist_ok=True)
    
    # Construct the correct path to CSV files
    file_path = os.path.join(japanese_dir, file)
    
    # Check if file exists before processing
    if not os.path.exists(file_path):
        print(f"Error: File not found - {file_path}")
        continue
        
    df = pd.read_csv(file_path)
    first_column = df.columns[0]
    words = df[first_column].tolist()
    print(f"Processing {file} with {len(words)} words...")
    downloaded = 0
    skipped = 0
    kks = pykakasi.kakasi()
    for word in words:
        save_path = os.path.join(output_dir, f"{word}.mp3")
        if os.path.exists(save_path):
            skipped += 1
            continue
        current_hiragana = kks.convert(word)
        tts = gTTS(text=current_hiragana, lang='ja')  # lang='ja' 表示日语
        tts.save(save_path)
        downloaded += 1
        print(f"saved {save_path}")
    print(f"Downloaded {downloaded} files, skipped {skipped} for {file}")
        
print("=======> All files processed.")