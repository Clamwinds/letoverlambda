helping steven file

fread returns the number of bytces read, so you can check if the operation was successful


    read_buffer needs to be your maximum read length(32 bytes) plus 1 for a terminating
    0

    filelocation function
    fileSize = strtol(read_buffer, NULL, 16);


Problem description:

Extract information from a binary file and using any tool, graph the data.

Input: binary file with information. The input file contains repeated sets of the following

fields:

1. 2 bytes (ignore)

2. 2 bytes of sequence number

3. 18 bytes of {x,y,z} data packed as 12-bit signed data

a. Every three bytes of input data contains 2 12-bit signed values. There are six

sets of 3 bytes, yielding 12 data sets. These sets should be grouped as {x,y,z}

yielding 4 sets of {x,y,z}.

The correct output will be a csv file with a header row containing the following (unquoted)

information: “x,y,z”. The following must be in the data:

1. Remember to do the sign extraction from the signed 12-bit data. If you don’t see any

negative numbers in your csv file, your answer is not correct.

2. Output (on the command line or similar) a sanity check on the data integrity. As

mentioned in the item above, each sequence of 22 bytes has a 2 byte sequence number.

The sequence number should increment (difference of only one) and wraps when it

reaches the maximum value of 2^16 – 1.

3. The file name of the output should match the input file name but with the suffix “.dat”

replaced with “.csv”

Example file output:

x,y,z

-258,-164,-397

-257,-164,-413

On the command line, you might get something like this:

Ø ExtractData file1.dat

Ø 2235 rows found, data integrity check passed


     ;read entire file into a  buffer and then process it individually
