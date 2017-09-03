#include <stdio.h>
#include <stdlib.h>
#include <editline/readline.h>
#include <editline/history.h>

// This reminds me write your own bash history remembering feature so you can find all your old commands and write your own utilities, 'but what' is a good objection, but I guess i'll just have to find that one out

int main(int argc, char** argv) {
  /* Print Version and Exit Informatio */ 


/* In a never ending loop */
while (1) {

  /* Output our prompt and get input */
  char* input = readline("lispy> ");

  /* Add input to history */
  add_history(input);

  /* Echo input back to user */
  printf("No you're a %s\n", input);
  /* free retrieved input */
  free(input);
 }



return 0;

}
