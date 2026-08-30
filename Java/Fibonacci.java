public class Fibonacci {
    public static void main(String[] args) {

        int n = 10;
        int a = 0;
        int b = 1;

        System.out.println(a);
        System.out.println(b);

        for (int i = 2; i < n; i++) {
            int proximo = a + b;

            System.out.println(proximo);

            a = b;
            b = proximo;
        }
    }
}