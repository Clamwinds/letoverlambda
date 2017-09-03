#include <stdio.h>
#include <stdlib.h>
int main(int argc, char**argv)
{
    char ch;
    FILE *fd = NULL;
    if ( argc != 2 )
    {
        fputs("usage error - a.out <Filename>\n", stderr);
        exit(EXIT_FAILURE);
    }
    if (!(fd = fopen(argv[1], "r")))
    {
        fprintf(stdout, "Could not open %s\n", argv[1]);
        exit(EXIT_FAILURE);
    }
    while (fread(&ch, sizeof(char), 22, fd))
    {
        fprintf(ch, "%x \n", (void*)ch);
    }
    fclose(fd);
    return 0;
}
