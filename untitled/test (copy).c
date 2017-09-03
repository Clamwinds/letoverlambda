#include <stdio.h>

int main(){


FILE* spIntFile;

int itemsRead;
int intAry[20];
char read_buffer[0x21];


 signed int[18];

struct record
{
    int ignore
    int length 4;



}

spIntFile = fopen("input.dat", "rb");

while(( itemsRead = fread(read_buffer, sizeof(char), 4, spIntFile)) != 0)
{
    printf("data: %s", read_buffer);


 }

}
