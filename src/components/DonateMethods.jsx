
const paymentMethods = [
  {
    name: "PayPal",
    logo: "./PayPal_Logo2014.webp",
    button: "Donate via PayPal",
    link: "YOUR_PAYPAL_DONATION_LINK",
  },
  {
    name: "Givebutter",
    logo: "./givebutter-logo+(1).webp",
    button: "Donate via Givebutter",
    link: "YOUR_GIVEBUTTER_DONATION_LINK",
  },
];

function DonateMethods() {
  return (
    <section className="bg-[#eee5da] px-6 py-10 md:py-12">
      <div className="mx-auto max-w-[750px]">

       
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-[70px]">

        
          <div className="flex flex-col gap-14">

            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="flex flex-col items-center"
              >
                <div className="mb-4 flex h-[67px] items-center justify-center">
                  <img
                    src={method.logo}
                    alt={`${method.name} logo`}
                    className="max-h-[60px] max-w-[210px] object-contain"
                  />
                </div>

                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[67px] w-full items-center justify-center
                  bg-[#398991] text-center font-semibold text-white
                  transition-colors hover:bg-[#2d747b]"
                >
                  {method.button}
                </a>
              </div>
            ))}

          </div>

          
          <div className="flex flex-col">

           
            <div className="mb-4 flex h-[67px] items-center justify-center">
              <img
                src="./public/Trustbridge+Logo+-+Jafuta+site.webp"
                alt="TrustBridge Global logo"
                className="max-h-[60px] max-w-[220px] object-contain"
              />
            </div>

           
            <a
              href="YOUR_TRUSTBRIDGE_DONATION_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[67px] w-full items-center justify-center
              bg-[#398991] text-center font-semibold text-white
              transition-colors hover:bg-[#2d747b]"
            >
              Donate via TrustBridge
            </a>

            
            <p className="mt-5 text-[16px] leading-[29px] text-gray-800">
              We can receive contributions from any country via{" "}
              <strong>TrustBridge.</strong> TrustBridge provides tax
              receipts for most countries. By clicking the link you
              can choose to request a tax receipt for your country
              if available.
            </p>

          </div>
        </div>

      
        <p className="mt-12 text-center text-[14px] font-bold leading-6 text-gray-900">
          We are registered in the USA as a 501 (c)3 foundation,
          so all USA donations are tax deductible.
        </p>

      </div>
    </section>
  );
}

export default DonateMethods;
