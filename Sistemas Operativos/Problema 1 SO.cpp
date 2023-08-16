// Problema 1 SO Juanfer

#include <iostream>
#include <cstdlib>

int numeros[7] = { 0,1,2,3,4,5,6 }, numero = 0;

std::string seguir = "s";

void inicio()
{
    std::cout << "Digite un numero del 0 al 6: "; std::cin >> numero;

    while (numero < 0 and numero > 6)
    {
        std::cout << "Error. Digite un digito del 1 al 6: "; std::cin >> numero;
    }
}

void calcular()
{
    
}

void imprimirDatos()
{

}

int main()
{
    do{
    
        inicio();
    

        std::cout << "Desea intentarlo de nuevo? S o N:\n"; std::cin >> seguir;

    } while (seguir == "S" and seguir == "s");

    system("pause");
    return 0;
}

