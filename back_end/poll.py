import socketio
import time

def main():
    sio = socketio.SimpleClient()

    try:
        sio.connect('http://127.0.0.1:5000/')
        while True:
            sio.emit("update_clients")
            time.sleep(1)
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    main()