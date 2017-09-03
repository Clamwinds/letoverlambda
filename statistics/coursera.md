Useful for interactive work, but contains a powerful programming language for
developing new tools(user->programming)

very active and vibrant user community; r-help and r-devel mailing lists
and stack overflow

standard r texts

Standard texts
Other resources
Chambers (2008).
Software for Data Analysis
, Springer. (your textbook)
Chambers (1998).
Programming with Data
, Springer.
Venables & Ripley (2002).
Modern Applied Statistics with S
, Springer.
Venables & Ripley (2000).
S Programming
, Springer.
Pinheiro & Bates (2000).
Mixed-Effects Models in S and S-PLUS
, Springer.
Murrell (2005).
R Graphics
, Chapman & Hall/CRC Pres


'<-' is how you assign stuff

x <- 1 ; x = 1
msg <- "hello"

"creates the symbol 'msg' while assigning hello

List is one exception to the general rule that

5 types of basic statistical obe

read.table w/ larger datasets is dangerous, using the colClasses argument makes
using the default read.table run MUCH faster, often twice as fast

textual help formats
--
other datasets other than tabular, dumping and dputing are also useful

unlike writing out a table or csv, dump and dputing
textual formats can work much better with version control programs like subversion or git which can only track changes meaningfully in text files

textual formats can be longer-lived; if there is corruption where in the file, it can be easier to fi the problem

textual formats adhere to the unix philosophy

downside: the format is not very space-efficient

anther way to pass data around is by deparsing an r-object and parsing it back in using
dget


connection: interfaces to the outside world, data are read in using connection interfaces. Connection can be made to files*most common) or to other mor exotic things

* file (opens a connection to a file)
* gzfile(opens a connectin ro a file compressed w/ gzip
* bzfile(bzfile opens a connection to a file compressed wtih bzip2
* url (open a connection to a webpage)

in general connetions are powerful tools that allow you to navigate files or external objects, inp ractice we often to not have to deal with the connection interface

connection can be useful if we want to read parts of a file
