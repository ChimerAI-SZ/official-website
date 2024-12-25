const AccordionList = [
  {
    key: 1,
    title: "How to place a sample order?",
    content: "Once we have confirmed the design you desire for the sample, we can proceed with the next steps. "
  },
  {
    key: 2,
    title: "Can I choose directly from your ready design?",
    content:
      "Yes, of course. Our AI creates new designs every season, allowing you to use them directly. For more information, please contact us."
  },
  {
    key: 3,
    title: "Can I make my own size?",
    content:
      "Yes, we can customize sizes to your specifications, as well as offer standard sizing options including US, UK, EU, and AU."
  },
  {
    key: 4,
    title: "What is the production process?",
    content: "View our supply chain →",
    link: "/services?tab=supply-chain"
  },
  {
    key: 5,
    title: "What's your MOQ for production? (minimum order quantity)",
    content:
      "Generally, our minimum order quantity (MOQ) is 100 units per style per color. However, this may vary depending on the fabric you choose."
  },
  {
    key: 6,
    title: "What are the main factors that affect the final price?",
    content: [
      {
        title: "Prices may vary depending on:",
        list: [
          {
            subtitle: "Ordered Quantity",
            content: ""
          },
          {
            subtitle: "Number of Sizes/Colors",
            content:
              "Example: Ordering 100 pieces in 3 sizes (S, M, L) is more cost-effective than ordering 100 pieces in 6 sizes (XS, S, M, L, XL, XXL)."
          },
          {
            subtitle: "Textile/Fabric Composition",
            content:
              "Example: T-shirts made from polyester are generally cheaper than those made from cotton or viscose."
          },
          {
            subtitle: "Quality of Production",
            content:
              "Example: Customized designs involving specialized stitching, accessories, or buttons will incur higher costs per unit. Additionally, different stitching techniques, such as flat-lock stitching versus reverse cross-stitching, can affect the overall price."
          }
        ]
      }
    ]
  },
  {
    key: 7,
    title: "What are your modes of shipping?",
    content:
      "We can ship by express mail via FedEx, UPS, DHL,TNT, or regular post. The shipping fee will be calculated based on the product weight and chosen shipping method."
  },
  {
    key: 8,
    title: "Can I put my own logo on the label of products?",
    content: "Yes, we offer custom label and hang tag printing services."
  }
]

const scaleList = [
  {
    key: "start-up",
    label: "Start-up"
  },
  {
    key: "sacle-up",
    label: "Scale-up"
  }
]

const platformList = [
  {
    key: "Tiktok",
    label: "Tiktok"
  },
  {
    key: "Instagram",
    label: "Instagram"
  },
  {
    key: "Shopify",
    label: "Shopify"
  },
  {
    key: "Amazon",
    label: "Amazon"
  },
  {
    key: "eBay",
    label: "eBay"
  },
  {
    key: "Etsy",
    label: "Etsy"
  },
  {
    key: "Other",
    label: "Other"
  }
]

export { AccordionList, scaleList, platformList }
