import cv2

# Create a video capture object to capture video from webcam
cam = cv2.VideoCapture(0, cv2.CAP_DSHOW)
cam.set(3, 640)  # Set video frame width
cam.set(4, 480)  # Set video frame height

# Load Haar Cascade classifier for face detection1
detector = cv2.CascadeClassifier('engine\\auth\\haarcascade_frontalface_default.xml')

# Take numeric face ID from user
face_id = input("Enter a Numeric user ID here: ")
print("Taking samples, look at camera ....... ")

count = 0  # Initialize sample face count

while True:
    ret, img = cam.read()  # Capture frame from webcam
    converted_image = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)  # Convert to grayscale
    faces = detector.detectMultiScale(converted_image, 1.3, 5)

    for (x, y, w, h) in faces:
        cv2.rectangle(img, (x, y), (x + w, y + h), (255, 0, 0), 2)  # Draw rectangle around face
        count += 1

        # Save the captured image into the samples folder
        cv2.imwrite("engine\\auth\\samples\\face." + str(face_id) + '.' + str(count) + ".jpg", converted_image[y:y + h, x:x + w])

        cv2.imshow('image', img)  # Display the image in a window

    k = cv2.waitKey(100) & 0xff  # Wait for key press
    if k == 27:  # Press 'ESC' to exit
        break
    elif count >= 100:  # Capture 100 samples
        break

print("Samples taken, now closing the program....")
cam.release()
cv2.destroyAllWindows()
