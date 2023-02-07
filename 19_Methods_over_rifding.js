class Bank{
    roi()
    {
        return 0;
    }
   }
   class AXIS extends Bank{
    roi()
    {
        return 10.5;
    }
   }
   class SBI extends Bank{
    roi()
    {
        return 12.5;
    }
   }
   // Bank is main class and here Axis , SBI is a chain class 

   sbi =new SBI;

   console.log(sbi.roi());//12.5 is result 

  axis =new AXIS;

   console.log(axis.roi());//10.5 is a result 

   // Methods over writting
