#include "main.cpp"

// In test_my_sum.c
int main(int argc, char *argv[]) {
  // assert(2 == my_sum(1, 1));
  // assert(-2 == my_sum(-1, -1));
  // assert(0 == my_sum(0, 0));



  // getTheLowestValue({1,2,3}, 3);
  // assert(1 == getTheLowestValue([2, 1, 3]));

  char arr[5] = {'A','B','C','D','E'};
  //Call Foo
  Foo(arr, 5); //Explicit length passed

  int myarr[3] = {1,2,3};
  Mee(myarr);

  assert(1 == Mee(myarr));

  // 
  return(0);
}