This is a file to document what all the other files do, and give a rough outline of my project so far,

mognoasync
---

squiffymongorito.js
---
Has all the stuff axel wants to use as functions, this will probably be combined with the koa
mongoose file so we can just it as an api that axel can call.

mongomapreduce file
----
Builds a collection mapreduceexample3 that gives us the sum of hours worked for each
employee on a specific shift.


MongoDB collections
----
mangledtimes2
---
Is a collection that specifies
*What building we worked on
*How many people worked and who
*What Shift/Month
* Avg hours
* Totalhours

From this collection we want to compute the average of the total hours spent per building
and to put this in another collection, eventually we will want a resulting collection that
has our [range of costs][range of square feet] + [inventory attrition for range of sqft] +
[all other costs]



timesheet
--
All our timesheet data from tsheets. Which documents how much time per jobcode cleaning or
a specific task took, this is the basis for a lot of our data

timesheetmodified2
---
Uses timesheet to build more meaningful queries from the database itself.

mapreduceexample3
----
Contains the total hours a specific person worked worked on what days shift.This just has
the total amount of hours worked per shift and not the seperate buildings, this is build from
the file *mongomapreduce*

"_id": {
    "username": "eduardotorres",
    "shiftandmonth": "1-8-2016"
  },
  "value": 5.799999999999999


restapi
--
http://mongoosejs.com/docs/unstable/docs/harmony.html
* remember to put koa link here
* this is what axel wants which will save all the customer data
* he will use this to call information from mongo related to the costs

axel said he wants a post function that will save all the contacts and then use the
