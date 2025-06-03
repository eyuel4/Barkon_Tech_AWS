# Barkon Tech AWS Course – Lecture 6: Load Balancer and Auto Scaling Group

Welcome to Lecture 6 of the Barkon Tech AWS Course!  
This session focuses on **Load Balancers** and **Auto Scaling Groups** using AWS.  
To demonstrate these concepts, we use a simple Node.js application that displays the hostname of the EC2 instance it is running on. This allows you to visually confirm load balancing and scaling across multiple EC2 instances.

---

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running the App](#running-the-app)
- [Demo with AWS Load Balancer & Auto Scaling Group](#demo-with-aws-load-balancer--auto-scaling-group)
- [Project Structure](#project-structure)
- [License](#license)

---

## Overview

This Node.js app displays the hostname of the EC2 instance it is running on.  
It's perfect for demonstrating:

- How AWS Load Balancer distributes traffic across multiple instances.
- How Auto Scaling Group launches or terminates EC2 instances in response to demand.

The hostname changes as traffic is routed to different instances, helping you observe the effect of scaling and load balancing in real time.

---

## Prerequisites

- AWS Account with permissions to create EC2, Load Balancers, and Auto Scaling Groups
- Node.js (version 12 or higher)
- AWS CLI configured
- Basic knowledge of AWS EC2, Load Balancers, and Auto Scaling

---

## Getting Started

1. **Clone this repository:**
   ```bash
   git clone <repo-url>
   cd <repo-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   node app.js
   ```
   By default, the app runs on port 3000. You can change the port by setting the `PORT` environment variable.

---

## Running the App

Once the app is running, visit:

```
http://<EC2-Public-IP>:3000/
```

You will see output similar to:

```
Hello from EC2 instance: ip-172-31-22-33
```

The hostname (`ip-...`) will change as requests are routed to different instances via the Load Balancer.

---

## Demo with AWS Load Balancer & Auto Scaling Group

1. **Launch EC2 Instances:**
   - Create a launch template or configuration using this Node.js app.

2. **Set Up Auto Scaling Group:**
   - Use the launch template to create an Auto Scaling Group.
   - Specify desired/min/max instance counts.

3. **Create Load Balancer:**
   - Set up an Application Load Balancer (ALB).
   - Register your Auto Scaling Group or instances as targets.

4. **Test Load Balancing:**
   - Access the Load Balancer's DNS name in your browser.
   - Refresh the page to see responses from different hostnames, confirming traffic distribution.

5. **Test Auto Scaling:**
   - Adjust scaling policies to trigger scale-out or scale-in events.
   - Observe how new hostnames appear/disappear as instances are added/removed.

---

## Project Structure

```
.
├── app.js           # Main Node.js application
├── package.json     # Node.js dependencies
└── README.md        # This documentation
```

---

## License

This project is for educational purposes as part of the Barkon Tech AWS Course.  
Feel free to use or modify for training and learning.

---

Happy Learning! 🚀