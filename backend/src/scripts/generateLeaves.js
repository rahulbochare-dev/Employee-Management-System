import mongoose from "mongoose";
import { Leave } from "../models/leave.model.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})

const employeeIds = [
  "6a6df9a6aed647ca2c1d2bd3",
  "6a6df9a7aed647ca2c1d2bd9",
  "6a6df9a7aed647ca2c1d2bdc",
  "6a6df9a7aed647ca2c1d2bdf",
  "6a6df9a7aed647ca2c1d2be2",
  "6a6df9a8aed647ca2c1d2be8",
  "6a6df9a8aed647ca2c1d2bee",
  "6a6df9a9aed647ca2c1d2bf4",
  "6a6df9a9aed647ca2c1d2bf7",
  "6a6df9aaaed647ca2c1d2bfd",
  "6a6df9aaaed647ca2c1d2c03",
  "6a6df9aaaed647ca2c1d2c06"
];

const leaveTypes = [
  "Casual",
  "Sick",
];

const statuses = [
  "Pending",
  "Approved",
  "Rejected"
];

const descriptions = [
  "Family function leave request.",
  "Medical emergency and recovery time.",
  "Vacation planned with family.",
  "Personal work and documentation.",
  "Need rest due to health issues.",
  "Travel leave request.",
  "Attending marriage ceremony.",
  "Mental wellness break.",
  "Work-life balance leave.",
  "Urgent hometown visit."
];

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomDate(start, end) {
  return new Date(
    start.getTime() +
    Math.random() * (end.getTime() - start.getTime())
  );
}

async function generateLeaves() {
  try {
    await mongoose.connect("mongodb://localhost:27017/");
    
    const leaves = [];
    
    for (let i = 0; i < 120; i++) {
        
        const fromDate = randomDate(
            new Date(2025, 0, 1),
            new Date(2026, 11, 1)
        );
        
        const leaveDays = Math.floor(Math.random() * 15) + 1;
        
        const toDate = new Date(fromDate);

        toDate.setDate(fromDate.getDate() + leaveDays);
        
      const leave = {
        employee: new mongoose.Types.ObjectId(
          randomItem(employeeIds)
        ),
        
        leaveType: randomItem(leaveTypes),
        
        description: randomItem(descriptions),
        
        from: fromDate,
        
        to: toDate,
        
        status: randomItem(statuses),
        
        createdAt: new Date(),

        updatedAt: new Date()
    };

      leaves.push(leave);
    }

    const insertedLeaves = await Leave.insertMany(leaves)
    console.log(insertedLeaves)
    console.log(mongoose.connection.name)
    
    console.log("✅ Dummy leaves generated successfully");
    
    process.exit(0);

  } catch (err) {

    console.log("❌ Error generating leaves");

    console.log(err);

    process.exit(1);
  }
}

generateLeaves();