# Step 1: Use the official Node.js image as the base
FROM node:latest

# Step 2: Set the working directory in the Docker container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application code
COPY . .

# Step 6: Build your Nuxt application
RUN npm run build

# Step 7: Expose the port your app runs on
EXPOSE 7010

# Step 8: Define the command to run your app
CMD ["npm", "start"]
