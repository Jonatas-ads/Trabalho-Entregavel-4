public class Contagem {
    public static void main(String[] args) {

        int n = 5;
        int[] numeros = {1, 3, 7, 2, 9};

        int contador = 0;

        for (int numero : numeros) {

            if (numero >= 1 && numero <= n) {
                contador++;
            }
        }

        System.out.println("Quantidade: " + contador);
    }
}
    

