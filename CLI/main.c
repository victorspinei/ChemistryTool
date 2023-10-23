#include <stdio.h>
#include <string.h>


// structure with information on each element, separate file

// hash function wich returns Z of each element

// find the element

// find out their molar mass and also multiply by the indices

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