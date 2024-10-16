import React from 'react'
import { motion } from 'framer-motion';

function Loans() {
  const containerVariant = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      }
    },
  }
  const cardVariant = {
    hidden: { opacity: 0, y: 10 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,        
        ease: "easeIn",    
      },
    },
  };

  const loanOptions = [
    {
      title: 'Conventional Loans',
      description: "These loans are those not backed by the government, they are very popular and require 3% down. One must have a satisfactory credit score. First time buyers have a good benefit as there are programs such as Fannie Mae's HomeReady and Freddie Mac's Home Possible that make it easier for you!",
      links: [
        { text: "Guide", url: "https://www.rocketmortgage.com/learn/conventional-mortgage" },
        { text: "Fannie Mae HomeReady", url: "https://singlefamily.fanniemae.com/originating-underwriting/mortgage-products/homeready-mortgage" },
        { text: "Freddie Mac's Home Possible", url: "https://sf.freddiemac.com/working-with-us/affordable-lending/guide-to-home-possible-mortgage?gad_source=1&gclid=CjwKCAjw3624BhBAEiwAkxgTOisQo369KPVcrQUmslZkitSnrbYympCHGnJu3JB0UmWyXAvJpHsZ7xoCyOcQAvD_BwE&gclsrc=aw.ds" }
    ]
    },
    {
      title: 'FHA Loans',
      description: "If you're looking for a more forgiving option, FHA loans might be your best friend. These loans are backed by the Federal Housing Administration, meaning they’re perfect for first-time buyers who might not have a big down payment.",
      links: [
        { text: "Check if you qualify for FHA", url: "https://www.fhaloans.com/lp/?no_rvw=1&no_ltype=1&desc=eligibility&utm_campaign=national&utm_term=exroas&utm_source=google&utm_medium=cpc&cmp=ht&src=adw&adg=fhaht&desc=first5&ad_campaign_id=21689112172&ad_adgroup_id=166447867639&network=g&matchtype=e&gad_source=1&gclid=CjwKCAjw3624BhBAEiwAkxgTOgAnp7FNHGfqYWrOPfqKLNFDp98w4ZX0G9QAfyGjHDkkuxOcPaAFXRoC1wYQAvD_BwE&mrasn=1304289.1616429.YwBK5Il7" },
        { text: "Guide", url: "https://www.rocketmortgage.com/learn/fha-loans" },
        { text: "2024 Information", url: "https://www.nerdwallet.com/article/mortgages/fha-loan" }
    ]
    },
    {
      title: 'VA Loans',
      description: 'For all the veterans and active-duty service members out there, VA loans are a fantastic benefit. They allow you to buy a home without any down payment and don’t require mortgage insurance, which means lower monthly payments.',
      links: [
        { text: "Guide", url: "https://www.rocketmortgage.com/learn/va-loans" },
        { text: "Official Site", url: "https://www.veteransunited.com/lp/rates/2/?addate=6-5-24&src=adw&adg=67791492873&cmp=head&desc=requirements-rates&matchtype=e&adid=701582432288&targetid=kwd-24323810&v=y&label=&campaignid=1698778702&gad_source=1&gclid=CjwKCAjw3624BhBAEiwAkxgTOkb_HukARjriWXw2ts58wXnla0_1S5_oTzPiidhKcXSoNbvgg1W6zxoCAuMQAvD_BwE" },
        { text: "Top VA loan lenders", url: "https://www.fund.com/top/mortgage-purchase/va-loans/desk/?cq_acc=3599661076&cq_cmp=20226921050&cq_adg=153471489767&cq_term=va%20loans&cq_plac=&cq_net=g&tvar=&stvar=&gad_source=1&gclid=CjwKCAjw3624BhBAEiwAkxgTOrV31-dGItK6frhSeh11xWRoee_DF3b6NIMGQL4oKDhnx1JFU3dUoRoCcmkQAvD_BwE" },
      ]
    },
    {
      title: 'USDA Loans',
      description: 'Loans for rural and suburban homebuyers with low to moderate income, requiring no down payment.',
      links: [
        { text: "Guide", url: "https://www.nerdwallet.com/article/mortgages/usda-loan?utm_source=goog&utm_medium=cpc&utm_campaign=mr_mktg_paid_041223_mortgage_dsa:lo&utm_term=adgrp_articles_148791112020&utm_content=c&mktg_hline=148791112020&mktg_body=655074697829&mktg_place=dsa-2073031996717&mktg_link=&gad_source=1&gclid=CjwKCAjw3624BhBAEiwAkxgTOoF0dkdF1tsLbvQcV62XPtc9hmf2zhcXqry9e7oMzpr5Ugm-BB5mRBoC2DQQAvD_BwE&gclsrc=aw.ds" },
        { text: "Official Site", url: "https://www.usda.gov/topics/farming/grants-and-loans" },
        { text: "Check Eligibility for your state", url: "https://eligibility.sc.egov.usda.gov/eligibility/incomeEligibilityAction.do?pageAction=state" },
      ]
    },
    {
      title: 'State and Local Programs',
      description: 'Assistance programs offering down payment and closing cost help for first-time homebuyers. One such great program is Mortgage credit certificate program',
      links: [
        { text: "Mortgage Credit Program Q&A", url: "https://www.ncsha.org/resource/mortgage-credit-certificate-program-qa/" },
        { text: "Guide", url: "https://www.bankrate.com/mortgages/mortgage-credit-certificate/" },
        { text: "Check Eligibility", url: "https://www.policygenius.com/homeowners-insurance/mortgage-credit-certificate/" },
      ]
    },
    {
      title: 'Additional Tool and Information',
      description: 'Find more information with these tools',
      links: [
        { text: "Fannie Mae's Down Payment assistance tool", url: "https://yourhome.fanniemae.com/calculators-tools/down-payment-assistance-tool" },
        { text: "Mortgage Calculator", url: "https://www.bankrate.com/mortgages/mortgage-calculator/" },
        { text: "Fannie Mae's Find a lender", url: "https://fm.fanniemae.com/makerentcount/find-a-lender" },
        { text: "Guide to Real Estate vocabulary", url: "https://www.brockbuilt.com/guide-to-real-estate-vocabulary/" },
      ]
    }
  ];



  return (
    <motion.div variants={containerVariant}  initial="hidden" animate="visible" >
      <h2 style={{textAlign:'center'}} >Financing your home</h2>
      <div className="house-container">
        {loanOptions.map((option, index) => (
          <motion.div  
          variants={cardVariant}
          className="house-card" 
          key={index}>
            <h3>{option.title}</h3>
            <p>{option.description}</p>
            <div>
                {option.links.map((link, linkIndex) => (
                    <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                        {link.text}
                    </a>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Loans