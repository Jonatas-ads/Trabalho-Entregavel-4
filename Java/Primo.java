public class Primo {
    public static void main(String[] args) {

        int n = 7;
        int divisores = 0;

        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                divisores++;
            }
        }

        if (divisores == 2) {
            System.out.println("É primo");
        } else {
            System.out.println("Não é primo");
        }
    }
}