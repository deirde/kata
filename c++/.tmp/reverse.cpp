#include <iostream>
int reversenumber(int n) {
   int reverse=0, rem;
   while(n!=0) {
      rem=n%10;
      reverse=reverse*10+rem;
      n/=10;sd
   }
   return reverse;
}