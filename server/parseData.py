import json
import random
import io
import base64
import math

def Generate(): #function generates a random 6 digit number
    code = ''
    for i in range(6):
        code += str(random.randint(0,9))
    return code

def b64EncodeString(msg):
    msg_bytes = msg.encode('ascii')
    base64_bytes = base64.b64encode(msg_bytes)
    return base64_bytes.decode('ascii')

def b64DecodeString(msg):
    base64_bytes = msg.encode('ascii')
    message_bytes = base64.b64decode(base64_bytes)
    return message_bytes.decode('ascii')

def structureData(data):
    for i in data['world']['rooms']:
        roomsObject['type-' + str(i['type'])] = []

    for i in data['world']['rooms']:
        roomsObject['type-' + str(i['type'])].append(i)

def randomizeSave(data):
    for i in data['world']['rooms']:
        # Combat Room
        if(i['type'] == 0):
            randomRoom = random.choice(list(enumerate(roomsObject['type-0.0'])))
            del roomsObject['type-0.0'][randomRoom[0]]
            i['biome_type'] = randomRoom[1]['biome_type']
            i['objects'] = randomRoom[1]['objects']

        # Worldboss
        if(i['type'] == 1):
            randomRoom = random.choice(list(enumerate(roomsObject['type-1'])))
            del roomsObject['type-1'][randomRoom[0]]
            i['biome_type'] = randomRoom[1]['biome_type']
            i['objects'] = randomRoom[1]['objects']

        # First fountain room
        if(i['type'] == 2):
            randomRoom = random.choice(list(enumerate(roomsObject['type-4'])))
            del roomsObject['type-4'][randomRoom[0]]
            i['type'] = 4
            i['objects'] = randomRoom[1]['objects']

        # Chest Room
        if(i['type'] == 4):
            if roomsObject['type-4']:
                randomRoom = random.choice(list(enumerate(roomsObject['type-4'])))
                del roomsObject['type-4'][randomRoom[0]]
                i['objects'] = randomRoom[1]['objects']

        # Fountain
        if(i['type'] == 10):
            pass

    return data

saveFiles = 11
randomSave = str(random.randint(1, saveFiles))

f = open('server/data/world' + randomSave + '.json')

roomsObject = {}

#print('- Loading data...')
data = json.load(f)

#print('- Structuring object...')
structureData(data)

data = randomizeSave(data)

newSave = b64EncodeString(json.dumps(data, ensure_ascii=True))

randomName = Generate() + '.avsv'

#print('- Saving file...')
#with io.open(randomName, 'w', encoding='utf-8') as f:
  #f.write(newSave)

#print('- Randomizing complete!')

print(newSave)

f.close()