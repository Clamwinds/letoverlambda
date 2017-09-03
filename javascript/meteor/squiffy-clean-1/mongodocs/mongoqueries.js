The aggregation framework from mongodb lets us perform relevant commands related to data analysis.

db.timesheet.find().forEach(function(doc){ doc.local_start_time=new Date(doc.local_start_time); db.local_start_time.save(doc); })
//this converts local_start_time to a Date() format, this actually messed up my collection

//apparently works better using ISO Date, also i copied this and it got me a strange result, it outputs the (doc) to a new collection
//saves it to the collection local_start_time

db.timesheet.find().forEach(function(doc){ doc.local_start_time=new ISODate(doc.local_start_time); db.local_start_time.save(doc); })
//this saves the ENTIRE DOC not just updates a few fields

db.timesheet.find().forEach(function(doc){ doc.local_start_time=new ISODate(doc.local_start_time); doc.local_end_time=new ISODate(doc.local_end_time); db.timesheetmodified.save(doc);})
// above one did both fields just fine

//db.timesheetmodified.find().forEach(function(doc) {
 // var getMonth = doc.local_start_time.getMonth()+1;
  //db.timesheetmodified.update(
   //   {$set: {Month: {whatMonth: getMonth, $cond: {if: {$eq: {"$getMonth", 12}, stringMonth: "Decemember"}} });
//doesn't work it just sets everything to December
//db.timesheetmodified.find().forEach(function(doc) {   var getMonth = doc.local_start_time.getMonth()+1;   db.timesheetmodified.insert({_id: $_id},{$set: {whatMonth: getMonth}} ) ; } );
// above isn't adding a field either

//db.timesheetmodified.find().forEach(function(doc) {   var getMonth = doc.local_start_time.getMonth()+1;   db.timesheetmodified.insert({_id: doc._id},{$set: {whatMonth: {whatMonth: getMonth} }} ) ; } );

db.timesheetmodified.aggregate(
    [
      {
        $project:
        {
          discount:
          {
            $cond: { if: { $gte: [ "$qty", 250 ] }, then: 30, else: 20 }
          }
        }
      }
    ]
)
 db.timesheetmodified.find().forEach(function(doc) {   var getMonth = doc.local_start_time.getMonth()+1;   db.timesheetmodified.update({_id: doc._id},{$set: {whatMonth: getMonth}} ) ; } );
// this did it, that is added a month field that specified whatMonth: 12 (if december)

db.timesheet.find().forEach(function(doc){ doc.local_start_time=new ISODate(doc.local_start_time); db.timesheetmodified.save(ISODate(doc.local_start_time));})


db.timesheet.aggregate([{$match: {username: "maribelmedina"} }, {$group: {username1: "fname", totalhours: {$sum: "hours"}} }])



db.timesheet.aggregate([{$match: {username: "maribelmedina"} }, {$group: {_id:"Maribel", totalhours: {$sum: "$hours"}} } ])
> Returned

//db.timesheet.aggregate([{$match: {username: "maribelmedina"} }, {$group: {_id:"Maribel", totalhours: {$sum: "$hours"}} } ])
{
  "waitedMS": NumberLong("0"),
  "result": [
    {
      "_id": "Maribel",
      "totalhours": 66.00000000000007
    }
  ],
  "ok": 1
}


//db.timesheet.aggregate({$match: {fname: "Eduardo"}}, {$group: {_id:"Eduardo", totalhours: {$sum: "$hours"}}})
> Returned

{
  "waitedMS": NumberLong("0"),
  "result": [
    {
      "_id": "Eduardo",
      "totalhours": 127.31999999999988
    }
  ],
  "ok": 1


> Problem I'm having is how many different usernames there are
> Oh beautiful there was a command for it
$ db.timesheet.distinct("fname")

> Results
[
  "Eduardo",
  "Kimberley",
  "Liam",
  "Maribel",
  "Mariel",
  "Simon",
  "Veronica"
]

> It would be awesome if I could just auto-sum the hours based on the information given here
> db.timesheet.aggregate({$match: {fname: "Kimberley"}}, {$group: {_id:"Kimberley", totalhours: {$sum: "$hours"}}})

{
  "waitedMS": NumberLong("0"),
  "result": [
    {
      "_id": "Kimberley",
      "totalhours": 67.06000000000004
    }
  ],
  "ok": 1
}


db.timesheet.aggregate({$match: {fname: "Liam"}}, {$group: {_id:"Liam", totalhours: {$sum: "$hours"}}})
{
  "waitedMS": NumberLong("0"),
  "result": [
    {
      "_id": "Liam",
      "totalhours": 88.33
    }
  ],
  "ok": 1
}


db.timesheet.aggregate({$match: {fname: "Mariel"}}, {$group: {_id:"Mariel", totalhours: {$sum: "$hours"}}})
{
  "waitedMS": NumberLong("0"),
  "result": [
    {
      "_id": "Mariel",
      "totalhours": 82.46999999999998
    }
  ],
  "ok": 1
}


db.timesheet.aggregate({$match: {fname: "Maribel"}}, {$group: {_id:"Maribel", totalhours: {$sum: "$hours"}}})
{
  "waitedMS": NumberLong("0"),
  "result": [
    {
      "_id": "Maribel",
      "totalhours": 66.00000000000007
    }
  ],
  "ok": 1
}


db.timesheet.aggregate({$match: {fname: "Veronica"}}, {$group: {_id:"Veronica", totalhours: {$sum: "$hours"}}})
{
  "waitedMS": NumberLong("0"),
  "result": [
    {
      "_id": "Veronica",
      "totalhours": 12.039999999999997
    }
  ],
  "ok": 1
}


db.timesheet.aggregate({$match: {fname: "Veronica"}}, {$group: {_id:"$fname", totalhours: {$sum: "$hours"}}})
{
  "waitedMS": NumberLong("0"),
  "result": [
    {
      "_id": "Veronica",
      "totalhours": 12.039999999999997
    }
  ],
  "ok": 1
}


>$$$$$ db.timesheet.aggregate({$group: {_id: "$fname", totalhours: {$sum: "$hours"}}})
{
  "waitedMS": NumberLong("0"),
  "result": [
    {
      "_id": "Veronica",
      "totalhours": 12.039999999999997
    },
    {
      "_id": "Simon",
      "totalhours": 8.41
    },
    {
      "_id": "Mariel",
      "totalhours": 82.46999999999998
    },
    {
      "_id": "Maribel",
      "totalhours": 66.00000000000007
    },
    {
      "_id": "Liam",
      "totalhours": 88.33
    },
    {
      "_id": "Kimberley",
      "totalhours": 67.06000000000004
    },
    {
      "_id": "Eduardo",
      "totalhours": 127.31999999999988
    }
  ],
  "ok": 1
}
lucien-Aspire-S7-392(mongod-3.2.0) test>

$ db.timesheet.distinct("lname")  //Returns distinct last names
$ db.timesheet.distinct("local_date").sort() //Returns unique local_dates we have info for


db.timesheet.aggregate({$group: {_id: "$local_date", totalhours: {$sum: "$hours"}}}, {$sort: {"_id": 1} }) //Sorts by date
db.timesheet.aggregate({$group: {_id: "$local_date", totalhours: {$sum: "$hours"}}}, {$sort: {"totalhours": 1} })
Sorts by total hours we worked that day



//(\b\d{1,2}\D{0,3})?\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|(Nov|Dec)(?:ember)?)\D?(\d{1,2}\D?)?\D?((19[7-9]\d|20\d{2})|\d{2})


Relevant job codes are:

Job_code1

db.timesheet.distinct("jobcode_1")
[
  "Building 20",
  "Home (cleaning)",
  "Travel",
  "Hacker Dojo",
  "Building 583",
  "Building 556",
  "Start shift",
  "Break",
  "Meeting",
  "Shift Total",
  "Administrative",
  "Cleaning Technician",
  "Close down"
]

db.timesheet.distinct("jobcode_2")
[
  "At building",
  "",
  "Restroom: Men's",
  "Restroom: Women's",
  "Walk-through",
  "Restroom: top floor, large",
  "Restroom: top floor, small",
  "Restroom: ground floor, left, small",
  "Restroom: ground floor, left, large",
  "Restroom: ground floor, mail room",
  "Restroom: ground floor, right, large",
  "Restroom: ground floor, right, small",
  "Trash",
  "Entrances & stairs",
  "Vacuum",
  "Kitchen",
  "Deep Clean",
  "Surfaces",
  "Restrooms",
  "Floors (lobby & green area)",
  "Entrances",
  "Shipping",
  "Kitchens & Bar",
  "Carpet cleaning",
  "Kitchen: right",
  "Kitchen: left",
  "Kitchen: bar",
  "Lobby floor",
  "Vacuum stairs",
  "General",
  "Invoices",
  "Daily/weekly job sheets",
  "Tsheets",
  "Depart the building"
]

db.timesheet.distinct("jobcode_3")
db.timesheet.distinct("jobcode_3")
[
  "",
  "Cleaning",
  "Mopping",
  "Ground floor",
  "Top floor",
  "Women's room: cleaning",
  "Men's room: cleaning",
  "Men's room: mopping",
  "Women's room: mopping",
  "Restocking",
  "Bar: cleaning",
  "Bar: mopping",
  "Left Kitchen: cleaning",
  "Right Kitchen: cleaning",
  "Right Kitchen: mopping",
  "Left Kitchen: mopping",
  "Right Kitchen: restocking",
  "Refrigerator cleaning",
  "Left Kitchen: restocking"
]


db.timesheet.distinct("jobcode_4")



[
  "",
  "Right: mail room: cleaning",
  "Right: large: mopping",
  "Left: large: mopping",
  "Left: small: mopping",
  "Large: mopping",
  "Small: mopping",
  "Right: mail room: mopping",
  "Full size",
  "Right: large: cleaning",
  "Left: large: cleaning",
  "Left: small: cleaning",
  "Small: cleaning",
  "Right: small corner: cleaning",
  "Large: cleaning"
]



db.timesheet.aggregate([{$group: {_id: "$jobcode_1", jobcodehours: {$sum: "$hours"}}},{$out: "new1"}]) is overwriting the previous hours

db.timesheet.aggregate(
[{$project: {_id: 0}}
   , {$group:
        {_id: "$jobcode_1", jobcodehours: {$sum: "$hours"}}
        }
])


db.timesheet.aggregate({$group: {_id: "$jobcode_2", jobcodehours1: {$sum: "$hours"}, buildingname : {$addToSet: "$jobcode_1"}, who: {$addToSet: "$username"}, what_date: {$addToSet: "$local_date"} , jobcodes_3: {$addToSet: "$jobcode_3"}, jobcodes_4: {$addToSet: "$jobcode_4"} } }   )

Contract:20,556,558

5200 a month