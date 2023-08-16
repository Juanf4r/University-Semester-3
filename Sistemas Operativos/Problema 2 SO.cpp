// Problema 2 SO.cpp 

#include<iostream>
#include<cstdlib>
#include<string>

std::string seguir = "S", orden;
int array[10] = { 35,3,56,15,6,8,69,56,48,5 }, aux = 0;

void bubbleSort()
{
	for (int i = 0; i < 10; i++)
	{
		for (int j = 0; j < 10; j++)
		{
			if (array[j] > array[j + 1])
			{
				aux = array[j];
				array[j] = array[j + 1];
				array[j + 1] = aux;
			}
		}
	}
}

void inicio()
{
	std::cout << "Tu array contiene los siguientes elementos: ";
	for (int i = 0; i < 10; i++)
	{
		std::cout << array[i] << " ";
	}

	std::cout << "\nDeseas ordenarla de menor a mayor? S o N: "; std::cin >> orden;
	while (orden != "S" and orden != "s" and orden != "N" and orden != "n")
	{
		std::cout << "\n\tError. Digite S o N: \t"; std::cin >> orden;
	}

	if (orden == "S" or orden == "s")
	{
		bubbleSort();
	}
	else
	{
		//No hace nada
	}
}

void imprimirDatos()
{
	std::cout << "Los ultimos 3 elementos son: ";
	for (int i = 7; i < 10; i++)
	{
		std::cout << array[i] << " ";
	}
}

int main()
{
	while (seguir == "S" or seguir == "s")
	{
		inicio();
		imprimirDatos();

		std::cout << "\n\nQuieres hacerlo de nuevo? S o N: "; std::cin >> seguir;
		while (seguir != "S" and seguir != "s" and seguir != "N" and seguir != "n")
		{
			std::cout << "\n\tError. Digite S o N: \t"; std::cin >> seguir;
		}
	}

	system("pause");
	return 0;
}