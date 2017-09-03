// So there is a book on c to lisp compilers and back so I thought why not pick up C in a non-classroom environment again, the book itself is build your own lisp by daniel holden

#include <stdio.h>
int main(int argc, char** argv) {
  puts("Hello, world!");
  return 0;
}

int add_together(int x, int y){
  int result = x + y;
  return result;
}

int added = add_together(10, 10);

typedef struct {
  float x;
  float y;
} point;

point p;
p.x = 0.1;
p.y = 10.0;

float length = sqrt(p.x * p.x + p.y * p.y);

if (x > 10 && x < 100) {
  puts('x is greater than 10 and less than 100!' );
 } else {
  puts("x is less than 11 or greater than 99!" );
 }

int i = 10
  while (1 > 0) {
    puts("Loop Iteration");
    i = i -1;
  }

  for(int i = 0;i < 10; i++){
    puts("Loop Iteration");
  }

#include <stdio.h>
/* Declare a buffer for user input of size 2048 */
static char input[2048];
int main(int argc, char** argv) {
  /* Print Version and Exit Information */
  puts("Lispy Version 0.0.0.0.1");
  puts("Press Ctrl+c to Exit\n");
  /* In a never ending loop */
  while (1) {
    /* Output our prompt */
    fputs("lispy> ", stdout);
    /* Read a line of user input of maximum size 2048 */
    fgets(input, 2048, stdin);
    /* Echo input back to user */
    printf("No you're a %s", input);
  }
  return 0;
}


