# Birdcall-Identification

This project aims at identifying birds based on their bird calls. The tasks carried out to complete the project include converting the audio data to its corresponding Mel spectrograms using the librosa python library for audio signal processing. The spectrograms are then stored for further classification using Convolutional Neural Networks of different stages. A web application for the birdcall identification was also developed to make it interactive using React JS.

# CNN Model
The CNN Model used is represented graphically using the below figure. It provides information about all the layers that are used for the model design.

![image](https://user-images.githubusercontent.com/82420256/146591531-e867a5d8-68e5-4622-992f-a6a331dbd265.png)

# Results
The accuracy of the model that is trained for 10 epochs is as displayed in the graph below:
![image](https://user-images.githubusercontent.com/82420256/146590436-7a458e32-0ef5-415e-b5b8-ea95e7cffad8.png)

At the end of 10th epoch, train accuracy was at 98% and test accuracy at 66.7%.

The screenshots of the web application are as follows:
The first page with upload audio file:
![image](https://user-images.githubusercontent.com/82420256/146591111-75e7a269-316e-4da5-bd75-e7be13269ed9.png)

The prediction results is shown in this image which includes the name of the bird predicted, its' photo and a small description.
![image](https://user-images.githubusercontent.com/82420256/146591152-b692f6f3-596f-4fdc-8d35-d05fee52dbb1.png)

# Future work

Future work includes improving the accuracy of the model and including may more birds into the dataset.
