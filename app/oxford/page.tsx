import Image from "next/image";

const Balliol =
  "https://www.balliol.ox.ac.uk/themes/custom/frontend/images/balliol-logo.svg";

export default function OxfordEmail() {
  return (
    <div className="flex flex-col p-16">
      <div className="flex justify-between">
        <div className="flex-1 text-sm">
          <b>From the Tutor for Undergraduate Admissions</b>
          <br />
          +44 (0)1865 277765
          <br />
          Undergraduate@balliol.ox.ac.uk
        </div>
        <Image src={Balliol} width={200} height={200} alt="Coat of Arms" />
      </div>
      <div className="mt-8">
        Neek
        <br />
        Fordox
        <br />
        Oxford
        <br />
        United Kingdom
      </div>
      <div className="mb-12 text-right">09 January 2024</div>
      <div className="flex flex-col gap-4 text-justify">
        <p>Dear Neek,</p>
        <p>
          I am pleased to offer you a place to read Philosophy, Politics and
          Economics for admission in October 2024, on condition that you obtain
          the following grades in your forthcoming examinations in the current
          academic year:
        </p>
        <p>
          A-level grades AAA. If a practical component forms part of any of your
          science A-levels used to make the offer, we expect you to pass it.
        </p>
        <p>
          This offer is based on the qualifications that you have declared on
          your UCAS application. If you wish to amend your upcoming
          examinations, you will need to agree this with the college first.
        </p>
        <p>
          This letter constitutes your formal offer of a <b>college place</b> at
          Balliol College.
        </p>
        <p>
          The university will make you a formal offer of a{" "}
          <b>University place</b> through UCAS by the end of January.
        </p>
        <p>
          The offer on UCAS will contain a link to the University&apos;s Terms
          and Conditions and other documents which you must read carefully.
          Please note that if you have an offer for deferred entry, your
          contract will be set out in the Terms and Conditions and other
          documents for your cohort which will be published next January. You
          will be emailed a link to these once they are online.
        </p>
        <p>
          When you accept the offer through UCAS as your <q>Firm Choice</q> you
          will enter into your contract with the University. The content of that
          contract and your responsibilities under it are explained in the Terms
          and Conditions.
        </p>
        <p>
          As a condition of accepting your University offer you <i>must also</i>{" "}
          declare any unspent relevant criminal convictions, to be dealt with
          under the{" "}
          <a className="underline text-blue-500" href="javascript:void(0)">
            <i>University&apos;s policy.</i>
          </a>{" "}
          You will receive a separate email from the University explaining how
          and when to do this by mid-January and also giving details of someone
          to contact if you need any help or guidance. It is also a condition of
          your University offer that any information submitted with or in
          relation to your application (whether to UCAS, the University or your
          college) is true, genuine, accurate and complete (i.e. does not omit
          information that you have been asked to provide). The consequences of
          failing to meet the conditions of this offer are set out in your Terms
          & conditions.
        </p>
      </div>
    </div>
  );
}
