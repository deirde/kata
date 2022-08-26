#include <iostream>
#include <algorithm>
#include <iterator>

using std::cout; 
using std::endl;
using std::string;
using std::reverse;

string ReverseString(string &s) {
    string rev(s.rbegin(), s.rend());
    return rev;
}

string* getNames() {
    string* names = new string[3];
    names[0] = "Simon";
    names[1] = "Peter";
    names[2] = "Dave"; 

    return names;
}

string testit() {
    return "ciao?";
}

void abc(string &abc) {
    cout << "111" << abc << endl;
    return;
}

int main() {
    // cout << getNames()[0] << endl;

    // int test = 10;
    // cout << &test << endl;

    string str = "This string shall be reversed";

    abc(str);

    // string str = "This string shall be reversed";

    // testit();

    // cout << str << endl;
    // cout << ReverseString(str) << endl;
    // cout << testit() << endl;

    // int *davidePointer;
    // int davideDynamic = 99;
    // davidePointer = &davideDynamic;
    // cout << davideDynamic << endl;

    return EXIT_SUCCESS;
}