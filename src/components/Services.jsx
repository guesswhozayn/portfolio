
import homivioImg from "../assets/img/homivio-desktop.png";
import attestifyImg from "../assets/img/attestify-desktop.png";
import picketImg from "../assets/img/picket-desktop.png";

export default function Services() {
  const services = [
    {
      title: "Frontend Architecture",
      desc: "I build intuitive, high-performance web interfaces with pixel-perfect precision.",
      img: homivioImg,
      bg: "bg-white",
    },
    {
      title: "Backend Engineering",
      desc: "Scalable, secure, and robust server-side solutions powering complex data pipelines.",
      img: picketImg,
      bg: "bg-[#f8f8fa]",
    },
    {
      title: "Web3 Development",
      desc: "Smart contracts and decentralized architectures leveraging blockchain technology.",
      img: attestifyImg,
      bg: "bg-white",
    }
  ];

  return (
    <div className="w-full bg-white text-black py-12" id="services">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col">
        {services.map((svc) => (
          <div 
            key={svc.title}
            className={`flex flex-col md:flex-row items-center justify-between py-12 md:py-16 px-12 ${svc.bg} border-b border-zinc-200 last:border-b-0`}
          >
            <h4 className="text-xl sm:text-2xl font-semibold tracking-tight text-black w-full md:w-1/3 mb-6 md:mb-0">
              {svc.title}
            </h4>
            
            <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-zinc-900 shadow-xl shadow-black/5">
                <img src={svc.img} alt={svc.title} className="w-full h-full object-cover object-left-top" />
              </div>
            </div>

            <div className="w-full md:w-1/3 flex md:justify-end">
              <p className="text-[12px] text-zinc-500 font-medium leading-relaxed max-w-[220px]">
                {svc.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
