export const baseStyle = `
    :root {


        /* colors */
        --clr-accent-400: #808;
        --clr-accent-100: #880;
        --clr-primary: #ebbd34;
        --clr-neutral-100: #999;
        --clr-neutral-900: #222;
        --clr-rose: #ffeeee;
        --clr-bg-1: #C8F3C3;
        --clr-bg-2: #FDDC8D;
        --clr-bg-3: #BFB5FE;
        --clr-light-grey: #d6d6d6;
        --clr-light-blue: #F2F2F2;
        --clr-white: #fff;

        
        /* font */
        --ff-primary: 'Hind', sans-serif;

/*      --ff-body: var(--ff-primary);
        --ff-heading: var(--ff-primary); */

        --fw-regular: 400;
        --fw-semi-bold: 500;
        --fw-bold: 700;

        
        --fs-300: 0.5rem;
        --fs-400: 0.875rem;
        --fs-500: 0.9375rem;
        --fs-600: 1rem;
        --fs-700: 1.875rem;
        --fs-800: 2.5rem;
        --fs-900: 2.5rem

        --fs-body: var(--fs-400);
        --fs-primary-headin: var(--fs-800);
        --fs-secondary-headin: var(--fs-700);
        --fs-nav: var(--fs-500);
        --fs-button: var(--fs-300);
    }

    @media(min-width: 40em) {
        :root {
            --fs-300: 0.7rem;
            --fs-500: 1.5rem;
            --fs-600: 2.5rem;
            --fs-700: 3.5rem;

            /* --fs-body: var(--fs-500);
            --fs-primary-headin: var(--fs-900);
            --fs-secondary-headin: var(--fs-800);
            --fs-nav: var(--fs-300); */
        }
    }

    /* == utility classes == */
    .text-primary-400 {
      color: var(--clr-primary)  
    }
    
    .text-accent-400 {
       color: var(--clr-accent-400) 
    }
    .text-accent-100 {
       color: var(--clr-accent-100) 
    }
    .text-neutral-100 {
        color: var(--clr-neutral-100)
    }
    .text-neutral-900 {
       color: var(--clr-neutral-900)
    }

    .bg-primary-400 {
      background-color: var(--clr-primary-400)  
    }
    .bg-accent-400 {
      background-color: var(--clr-accent-400) 
    }
    .bg-accent-100 {
      background-color: var(--clr-accent-100) 
    }
    .bg-neutral-100 {
       background-color: var(--clr-neutral-100)
    }
    .bg-neutral-900 {
      background-color: var(--clr-neutral-900)
    }

      
    .fw-bold { font-weight: var(--fw-bold) }
    .fw-semi-bold { font-weight: var(--fw-semi-bold) }
    .fw-regular { font-weight: var(--fw-regular) }

    .fs-primary-heading: { 
      font-size: var(--fs-primary-heading)
    }
    .fs-secondary-heading: { 
      font-size: var(--fs-primary-heading)
    }
    
    .fs-300 { font-size: var(--fs-300) }
    .fs-400 { font-size: var(--fs-400) }
    .fs-500 { font-size: var(--fs-500) }
    .fs-600 { font-size: var(--fs-600) }
    .fs-700 { font-size: var(--fs-700) }

    .fs-nav { font-size: var(--fs-nav) }
    .flex { 
      display: flex;
      gap: var(--gap, 1rem);
    }
    .grid {
      display: grid;
      gap: var(--gap, 1rem);
      align-items: center;
    }
    .d-block {
      display: block;
    }
    .center {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .relative {
      position: relative;
    }
    .fixed {
      position: fixed;
    }

    .flow-y > *:where(:not(:first-child)) {
      margin-top: var(--flow-y-space, 1rem);
  }
    .flow-x > *:where(:not(:first-child)) {
      margin-left: var(--flow-x-space, 1rem);
  }


  .activeLink {
    display: flex;
    align-items: center;
    gap: 5;
    padding-left: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.5rem;
    margin: 0.5rem;
   }

   .normalLink {
    display: flex;
    align-items: center;
    gap: 5;
    padding-left: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.5rem;
    margin: 0.5rem;
    color: #555;
   }
`


