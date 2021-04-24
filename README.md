# Spleetz
Final project of CS422 - Software Analysis and Design

### Team members
Long Vũ Quỳnh Châu - 1751054

Trần Triều Thạnh - 1751020

### Description
***Spleetz*** is a mobile application for those who have worries thinking about how to split the bill every time they go out for a meal, or order a takeout.
Spleetz will divide the bill based on the food and the people added to that specific food.

In the future, the app may provide extra functionality for invoice OCR to reduce the time someone has to type their bills.

##Demo
Below are 2 small demo of Spleetz:
- Original Demo: https://www.youtube.com/watch?v=v1_6oP8ki_M
- Second Demo for changing avatar: https://www.youtube.com/watch?v=1HiRWI_tV-k

### Technology
Spleetz is built using React Native, and Firebase


### Functionalities
- Signin/Signup
- Account: The user can change their avatar, and change other basic information in the Profile page
- Add friend: For faster access to friends, the user can add people to their friendlist with username
- Create a bill: The list provide a way for users to enter text, change quantity, and select people from their friendlist to the current item
- Bill category: Besides Food, there are 3 other categories such as Housing, Shopping, Others
- Bill detail: Each bill created, and each money divided will be notified to others, and saved in a seperate screen. The list will provide all details just like when a normal bill is created
- Statistics: There will be an overview of how much a user have spent on all bills, and how much have they received on all bills, and what category have they paid for
- Chat (not yet implemented)
- OCR (not yet implemented)

### Installation

## For Android
```
git clone https://github.com/lvqchau/spleetz
npm install
npm run android
```

## For IOS
```
git clone https://github.com/lvqchau/spleetz
npm install
cd ios && pod install && cd ../
npm run ios
```
