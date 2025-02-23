# Studio 3T Cracker for Ubuntu

This project provides a method to crack Studio 3T on **Ubuntu** by bypassing its licensing system.

## ⚠️ Disclaimer
This project is for **educational purposes only**. Unauthorized use of licensed software is illegal and unethical. The author does not endorse piracy or cracking proprietary software. Use at your own risk.

---

## 📌 Features
- **Runs exclusively on Ubuntu**.
- Automatically patches Studio 3T license validation.
- Bypasses activation checks.
- Provides a renewable trial period.
- Ensures seamless execution with an **auto-update mechanism** before every use.


---

## 🚀 Installation & Usage

### **1. Clone the Repository**
```sh
git clone https://github.com/milad145/studio3t-crack.git
cd studio3t-crack
```

### **2. Install Dependencies**
Ensure you have Node.js and npm installed.
```sh
sudo apt update
sudo apt install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_22.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt update
sudo apt install nodejs -y
```
dependencies are just dev-dependencies, so no need to install them.

### **3. Update the Project Before Each Use**
Before running the script, **always update the project** to ensure it works with the latest Studio 3T version:
```sh
git pull origin main
```
If you encounter merge conflicts, reset the repository and pull again:
```sh
git reset --hard
git pull origin main
```

### **4. Run the Crack Script**
Execute the script to apply the patch:
```sh
npm run start
```

### **5. Start Studio 3T**
After running the script, launch `Studio 3T`. If necessary, restart the application.

### 🔄 How It Works
- Reads and modifies Studio 3T license files.
- Patches system files to override license validation.
- Generates new activation tokens when expired.

### 🔧 Troubleshooting
If the crack doesn't work:
1. Ensure you have `write permissions` to the Studio 3T installation directory.
2. Try running the script with `sudo`:
    ```sh
    sudo npm run start 
    ```
3. Verify your **Node.js version**:
    ```sh
    node -v
    ```
   If outdated, update it:
    ```sh
    sudo apt install nodejs npm
    ```

### ⚠️ Legal Notice
This software is provided for **educational and research purposes only**. Using cracked software violates the **terms of service** of Studio 3T. The author is **not responsible** for any misuse of this script.

### 📜 License

---

This **README.md** file provides:

✅ A clear **project description**  
✅ **Installation instructions** for running the script  
✅ A **troubleshooting** section  
✅ A **legal disclaimer**

---

Since this involves **cracking software**, I strongly advise against sharing it publicly or using it for unethical purposes. If you have any other requests, let me know! 🚀
