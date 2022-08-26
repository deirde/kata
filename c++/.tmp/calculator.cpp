#include <iostream>
int main() {
        char array[] = {'C', '+', '+', '1', '1'};
        for (auto&i : array) {
                printf("%c", i);
        }
        std::cin.get();
        return 0;
}