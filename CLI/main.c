#include <stdio.h>
#include <string.h>

int main(int argc, char** argv)
{
    if (argc != 2)
    {
        printf("Usage: %s <substance/element>\n", argv[0]);
        return 1;
    }

    char* argument = argv[1];
    int length = strlen(argument);

    printf("The text: %s, has %i letters\n", argument, length);
}