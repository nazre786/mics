# mics
Mini Car Inventory System

Task Description:

Creating a personal mini car inventory system from scratch using your best knowledge and skills. The system will have inventory of manufacturer and models (cars) of each manufacturer owned.

Technology to be used:

PHP 7 (OOP), MySql (Normalized Database Schema), Javascript (JQuery -  AJAX), HTML and CSS.

Classes to be created:	

    Database - Class to deal with each and every operation of database.

    Manufacturer - Class to deal with all operations related to car manufacturer.

    Model  - Class to deal with all operations related to car model.



Page 1: Add Manufacturer.
The page should contain a input box for manufacturer name and a submit button. 

Page 2: Add Model.
This page should have a manufacturer dropdown on the right side and model name textbox on the left side (Both should be in the same line) and should have a submit button.

Page 3: View Inventory.

This page should populate a table of all the models and manufacturers from the DB. 

It should have the columns as below

Serial Number, Manufacturer Name, Model Name, Count, Sold Button

eg. 

1.	 Maruti             WagonR              2            Sold

2.      Tata                 Nano                   1            Sold

On clicking the Sold button, the count reduces by 1 if the count is more than 1.

If the Count is 1 the row is deleted.

Accordingly the DB is updated.
