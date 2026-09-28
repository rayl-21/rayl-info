---
title: "Why Payers Make Insurance Easier for Themselves First"
description: "From EDI and payer portals to CAPTCHA and access restrictions, insurance gets cheaper to administer before it gets easier for a provider to use."
pubDate: 2026-09-27
---

In [my last piece](https://rayl.info/post/dental-revenue-cycle-front-desk/), I traced dental insurance verification from the initial eligibility check to the final patient estimate. While Electronic Data Interchange (EDI) provides the baseline, web portals supply the details, and phone calls resolve the inevitable exceptions. Ultimately, the practice is left to reconcile these moving parts and carry the resulting uncertainty straight into treatment planning.

Why, after decades of technological investment, does the provider still have to manually assemble the truth?

The answer lies in how incentives line up. Payers benefit substantially from reducing their own administrative overhead, but their incentive to eliminate the provider's remaining busywork is much weaker. At a dental service organization (DSO) managing 50 or more locations, that gap translates into a daily operational bottleneck.

## The Origins of Fragmented Workflow

Before modern portals, healthcare billing was highly fragmented. When HHS adopted HIPAA's transaction standards in 2000, it noted [about 400 different electronic claims formats](https://aspe.hhs.gov/reports/health-insurance-reform-standards-electronic-transactions) in use. Providers were forced to accommodate a web of different receiving systems because competing plans struggled to agree on unified standards without handing rivals a short-term advantage—a coordination problem HHS explicitly called out in its [2000 FAQ](https://aspe.hhs.gov/reports/frequently-asked-questions-about-electronic-transaction-standards-adopted-under-hipaa).

HIPAA established the baseline for common electronic transactions, such as 270/271 for eligibility and 837 for claims. However, the [original rule](https://www.govinfo.gov/content/pkg/FR-2000-08-17/pdf/00-20820.pdf#page=29) sharply distinguished eligibility from both authorization and a guarantee of coverage. A perfectly standardized response could still leave a practice's core financial questions unanswered.

Web portals evolved alongside EDI. An [archived Availity homepage from 2001](https://web.archive.org/web/20010720121231/http://www.availity.com:80/) announced a joint venture between subsidiaries of Humana and Blue Cross and Blue Shield of Florida. By [May 2002](https://web.archive.org/web/20020523011912/http://www.availity.com:80/), they were touting live services and fewer phone calls; by [February 2003](https://web.archive.org/web/20030205042932/http://availity.com:80/), they advertised batch claim submissions directly from practice software. Securing online access and achieving workflow integration were two different milestones.

## The Economics of Incomplete Automation

The [2024 CAQH Index](https://www.caqh.org/hubfs/Index/2024%20Index%20Report/CAQH_IndexReport_2024_FINAL.pdf#page=57) helps explain why payer investment can stop short. It estimated these labor costs for dental eligibility and benefits transactions:

<div class="overflow-x-auto [&_table]:min-w-[32rem]" role="region" aria-label="Eligibility transaction cost comparison" tabindex="0">

| Channel | Payer cost | Provider cost | Payer savings vs. previous channel | Provider savings vs. previous channel |
| --- | ---: | ---: | ---: | ---: |
| Manual (baseline) | $3.20 | $6.52 | — | — |
| Partially electronic | $0.04 | $4.37 | $3.16 | $2.15 |
| Fully electronic | $0.02 | $2.53 | $0.02 | $1.84 |

</div>

*All figures are per transaction. Partially electronic includes portals and automated phone systems. Savings compare each row with the row immediately above it.*

These figures reveal a structural misalignment. Moving from manual to partially electronic processes saves the payer $3.16 per transaction. Taking the final step to a fully electronic workflow adds just two cents to their savings, but yields another $1.84 for the provider. An insurer’s return on investment peaks the moment a web portal goes live. The practice, however, doesn't see relief until the data flows directly into its own practice management software (PMS). The labor required to bridge those two screens stays on the provider's payroll.

The [ADA's 2021 eligibility study](https://www.ada.org/-/media/project/ada-organization/ada/ada-org/files/resources/practice/dental-insurance/eligibility_and_benefits_verification.pdf) found this tension in stakeholder interviews. Payers faced expensive call volumes and limited investment budgets; portals let them support multiple services through one investment. Practices wanted complete information inside the software they already used. Improving one organization's economics did not necessarily finish the other organization's workflow.

The purchasing relationship reinforces this disconnect. Because the employer buying insurance is different from the practice using the payer's tools, front-desk effort becomes a stronger commercial signal when it affects network access, employee experience, or contract negotiations. The payer can see its call-center expense directly. The practice's remaining reconciliation time is much less visible.

Some administrative requirements also serve a separate purpose: controlling spending. While eligibility establishes coverage information, prior authorization determines whether a proposed service or drug will be approved. An [April 2026 research paper](https://zarekcb.github.io/PriorAuth_Web.pdf), using random default assignment of low-income Medicare Part D beneficiaries, modeled the removal of authorization restrictions studied in 2007–2015. Drug spending would rise about $100 per beneficiary-year, while calibrated paperwork costs would fall roughly $10. Health effects remained inconclusive.

That gives payers a reason to preserve review, but it does not establish that every operational hurdle improves it. As researcher Michael Anne Kyle explains in a [JCO Oncology Practice podcast](https://www.podparadise.com/episodes/29488710/), the coverage decision and the bureaucracy surrounding it are separate problems.

The consequences can be substantial. [OIG estimated that 13% of denied Medicare Advantage authorization requests met Medicare coverage rules](https://oig.hhs.gov/reports/all/2022/some-medicare-advantage-organization-denials-of-prior-authorization-requests-raise-concerns-about-beneficiary-access-to-medically-necessary-care/). That estimate concerns denied requests, not all requests or dental cases. A [QJE study](https://doi.org/10.1093/qje/qjad035) found that billing friction reduced physicians' willingness to accept Medicaid patients. Friction can damage the very networks payers need to maintain.

The financial incentives also vary by arrangement. [Self-funded employers pay claims while administrators earn fees](https://www.cigna.com/employers/cost-control/funding-solutions), so every rejected claim does not automatically become insurer profit. Applicable medical insurance also faces [medical-loss-ratio requirements and rebates](https://www.cms.gov/marketplace/private-health-insurance/medical-loss-ratio).

## Scaling the Friction Across a DSO

Consider a 50-location DSO performing 20 checks per location each day: 1,000 checks. Just one extra minute of manual intervention per check consumes nearly 17 staff-hours daily. This is an illustrative workload, but the arithmetic shows how small interruptions accumulate.

Centralized revenue teams must manage network participation and portal access as separate requirements. [Delta Dental of Washington](https://www.deltadentalwa.com/provider/resources/faq) ties participation to both provider and location, meaning an associate sharing an office's tax ID is not automatically participating.

Account architectures vary as well. [Aetna Dental](https://www.aetna.com/provweb/) requires separate individual accounts for different tax IDs, while leaving group accounts unchanged. [Guardian supports multiple providers under a single login](https://storage.pardot.com/503851/1750969256kI3wc3fF/Guardian_Anytime_Guide_for_Providers_FINAL.pdf#page=5), but still requires linking additional taxpayer identities. A central team must keep these relationships current as offices are acquired, clinicians move, and staff leave.

Access controls add more dependencies. [MetDental's registration form](https://dentalprovider.metlife.com/public/metDentalRegistration) includes reCAPTCHA. [Delta Dental of Washington's MFA rules](https://www.deltadentalwa.com/provider/resources/cybersecurity/multifactor-authentication) require verification on a new browser or device and after specified session limits. Aetna's login notice says losing access to the registered email can require a new registration. Staff turnover and account recovery become part of maintaining workflow continuity.

Guardian's portal restriction limits CDT-code retrieval to three codes at a time. That creates additional work when a treatment plan requires information for more procedures. [Availity announced in 2022](https://www.availity.com/blog/why-apis-are-better-than-bots/) that it would eliminate bot access to its provider portal and direct approved automation toward APIs. Security controls can serve legitimate purposes while leaving the DSO responsible for assembling a reliable workflow across insurers.

A stopped retrieval means incomplete work: an unresolved task requiring an owner before the patient arrives. A successful login or partial response cannot establish that every required procedure has been checked.

When digital channels cannot complete the job, phone and fax remain available. Guardian's [August 2025 dentist manual](https://storage.pardot.com/503851/1778176336KbJRzZWQ/DENTALGUARD_PREFERRED_NETWORK_DENTIST_MANUAL.pdf#page=11) describes benefit summaries returned by fax, usually within 30 minutes. It also requires letter or fax documentation for added locations.

Phone channels have their own access controls. A [UHC notice in Mississippi Medicaid's April 2025 bulletin](https://medicaid.ms.gov/wp-content/uploads/2025/05/April-2025-Provider-Bulletin.pdf#page=28) announced a routing change requiring callers to answer a fax-related question before reaching an advocate. Repeated requests for an advocate without answering would lead to disconnection. The notice cited bots and privacy; it documents that specific announcement, not every UHC phone line.

## Can Regulation Close the Gap?

Federal regulations have steadily attempted to bridge these gaps. The Affordable Care Act added operating-rule requirements: eligibility and claim-status rules became mandatory in 2013, and electronic payment/remittance rules in 2014. [CMS acknowledged](https://www.cms.gov/newsroom/fact-sheets/hhs-adopts-operating-rules-electronic-funds-transfersremittance-advice) that plans would shoulder implementation costs while much of the benefit went to providers.

HITECH and the Cures Act advanced clinical data exchange, but health plans [aren't subject to information-blocking rules merely by virtue of being insurers](https://healthit.gov/faq/are-health-plans-or-other-payers-subject-information-blocking-regulation/).

[CMS's 2024 interoperability rule](https://www.cms.gov/newsroom/fact-sheets/cms-interoperability-prior-authorization-final-rule-cms-0057-f) adds operational requirements generally beginning in 2026 and payer APIs generally in 2027. It covers specified Medicare Advantage, Medicaid/CHIP, and federal Marketplace plans. Employer commercial plans and stand-alone dental Marketplace plans generally remain outside its scope, though dental benefits within covered MA/Medicaid arrangements can be included.

HHS finally adopted claims-attachment standards in March 2026, with [compliance due May 26, 2028](https://www.cms.gov/files/document/nsg-attachments-rule-faqs.pdf), but did not finalize prior-authorization attachment standards in that rule. Thirty years after HIPAA, the infrastructure for supporting documentation is still catching up.

For a DSO, useful automation must carry a case through these fragmented steps. It needs to preserve evidence, flag missing procedure codes, verify specific network participation, and write the results into the PMS.

Administrative simplification becomes real when you count the work that actually disappears from the front desk.
