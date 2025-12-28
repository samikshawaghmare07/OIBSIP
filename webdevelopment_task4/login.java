import java.util.HashMap;
import java.util.Scanner;

public class login {

    static HashMap<String, String> users = new HashMap<>();
    static Scanner sc = new Scanner(System.in);
    static boolean isLoggedIn = false;
    static String currentUser = "";

    public static void main(String[] args) {

        while (true) {
            System.out.println("\n--- MENU ---");
            System.out.println("1. Register");
            System.out.println("2. Login");
            System.out.println("3. Secured Page");
            System.out.println("4. Exit");
            System.out.print("Choose option: ");

            int choice = sc.nextInt();
            sc.nextLine(); 

            if (choice == 1) {
                register();
            } else if (choice == 2) {
                loginSystem();
            } else if (choice == 3) {
                securedPage();
            } else if (choice == 4) {
                System.out.println("Thank you!");
                break;
            } else {
                System.out.println("Invalid choice!");
            }
        }
    }

    static void register() {
        System.out.print("Enter username: ");
        String username = sc.nextLine();

        if (users.containsKey(username)) {
            System.out.println("User already exists!");
            return;
        }

        System.out.print("Enter password: ");
        String password = sc.nextLine();

        users.put(username, password);
        System.out.println("Registration successful!");
    }

    static void loginSystem() {
        System.out.print("Enter username: ");
        String username = sc.nextLine();

        System.out.print("Enter password: ");
        String password = sc.nextLine();

        if (users.containsKey(username) && users.get(username).equals(password)) {
            isLoggedIn = true;
            currentUser = username;
            System.out.println("Login successful!");
        } else {
            System.out.println("Invalid username or password!");
        }
    }

    static void securedPage() {
        if (isLoggedIn) {
            System.out.println("Welcome to secured page, " + currentUser + "!");
        } else {
            System.out.println("Access denied! Please login first.");
        }
    }
}
