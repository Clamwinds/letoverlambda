#include <stdio.h>
#include <stdlib.h>

int main(){


    FILE* file = NULL;

#define BUFFER_SIZE 44
int itemsRead;
size_t bytes_read =0;

 unsigned char* charbuffer;

 unsigned int read_buffer2[50];
 unsigned char buffer; //one byte
//char takes up exactly 1 byte
 void* parea;


 if (!(file = fopen(argv[1], "r")))
 {
     fprintf(stdout, "Could not open %s\n", argv[1]);
     exit(EXIT_FAILURE);
 }




file= fopen("input.dat", "rb");
buffer = fread(&charbuffer, 1, 44, file);
printf("%x \n", &charbuffer);




}
