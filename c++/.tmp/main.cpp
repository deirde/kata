#include <iostream>
#include <assert.h>
using namespace std;

// In my_sum.c
// int my_sum(int a, int b) {
// //   std::cout << "I am " << a << " years old and my zipcode is " << b << "\n";

//   int foo [5] = { 16, 2, 77, 40, 12071 };
//   foo[2] = 99;

//   std::cout << "I am " << foo[2] << " years old and my zipcode is " << b << "\n";
//   cout << foo;
//   return a + b;
// }

void Foo(char array[], size_t len) {
 for(size_t i=0; i < len; i++) {
  std::cout << array[i] << "\n";
 }
}

int Mee(int array[]) {
  return 1;
}

// In test_my_sum.c
// int main(int argc, char *argv[]) {
//   // assert(2 == my_sum(1, 1));
//   // assert(-2 == my_sum(-1, -1));
//   // assert(0 == my_sum(0, 0));



//   // getTheLowestValue({1,2,3}, 3);
//   // assert(1 == getTheLowestValue([2, 1, 3]));

//   char arr[5] = {'A','B','C','D','E'};
//   //Call Foo
//   Foo(arr, 5); //Explicit length passed

//   int myarr[3] = {1,2,3};
//   Mee(myarr);

//   assert(1 == Mee(myarr));

//   // 
//   return(0);
// }