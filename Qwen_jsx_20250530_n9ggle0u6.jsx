import { useState } from 'react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Tecnologia da Informação",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      description: "Oferecemos soluções completas em redes LAN/WAN, cibersegurança, computação em nuvem e suporte técnico corporativo.",
      image: "https://picsum.photos/id/1005/600/400", 
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Electricidade Industrial",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="14.31 8 20.04 17.94 9.96 17.94 15.69 8"/>
          <line x1="12" y1="22" x2="12" y2="12"/>
        </svg>
      ),
      description: "Desenvolvemos projectos eléctricos industriais, automação de processos (PLC/SCADA), manutenção preventiva e preditiva.",
      image: "https://picsum.photos/id/1011/600/400", 
      color: "from-yellow-400 to-yellow-600"
    },
    {
      id: 3,
      title: "Higiene & Segurança",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      ),
      description: "Realizamos avaliações de risco, auditorias de segurança, treinamentos certificados e apoio à conformidade com normas ISO 45001.",
      image: "https://picsum.photos/id/1024/600/400", 
      color: "from-green-400 to-green-600"
    },
    {
      id: 4,
      title: "Consultoria Técnica",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      description: "Apresentamos serviços de due diligence técnica, gestão de projectos, licenciamento legal e apoio à conformidade regulatória.",
      image: "https://picsum.photos/id/1027/600/400", 
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 5,
      title: "Formação Profissional",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      description: "Promovemos cursos técnicos certificados, workshops práticos e programas personalizados com certificação reconhecida nacional e internacionalmente.",
      image: "https://picsum.photos/id/1029/600/400", 
      color: "from-red-400 to-red-600"
    },
    {
      id: 6,
      title: "Comércio Técnico",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.74a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
      ),
      description: "Distribuímos equipamentos, peças e materiais técnicos de alta qualidade, garantindo fornecimento ágil e confiável para diversos sectores industriais.",
      image: "https://picsum.photos/id/1035/600/400", 
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="%PUBLIC_URL%/logo.svg" alt="Logo MDM Angola" className="w-8 h-8" />
            <h1 className="text-xl font-bold text-blue-900">MDM Angola</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#inicio" className="hover:text-blue-600 transition">Início</a>
            <a href="#sobre" className="hover:text-blue-600 transition">Sobre Nós</a>
            <a href="#servicos" className="hover:text-blue-600 transition">Serviços</a>
            <a href="#projetos" className="hover:text-blue-600 transition">Projetos</a>
            <a href="#contacto" className="hover:text-blue-600 transition">Contacto</a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12"/>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18"/>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-3 text-sm">
            <a href="#inicio" className="block hover:text-blue-600 transition">Início</a>
            <a href="#sobre" className="block hover:text-blue-600 transition">Sobre Nós</a>
            <a href="#servicos" className="block hover:text-blue-600 transition">Serviços</a>
            <a href="#projetos" className="block hover:text-blue-600 transition">Projetos</a>
            <a href="#contacto" className="block hover:text-blue-600 transition">Contacto</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold leading-tight mb-4">Parceiro Estratégico em Soluções Técnicas</h2>
            <p className="text-lg opacity-90 mb-6">
              A MDM Angola oferece serviços integrados e especializados nas áreas de Tecnologia da Informação, Eletrônica Industrial, Higiene e Segurança no Trabalho e Formação Profissional.
            </p>
            <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold shadow hover:bg-yellow-300 transition">
              Solicitar Orçamento
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="https://picsum.photos/id/1033/600/400"  alt="Equipa técnica em acção" className="rounded-lg shadow-xl"/>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Quem Somos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Missão</h3>
              <p>Fornecer soluções técnicas integradas e de qualidade, contribuindo para o desenvolvimento empresarial, segurança e modernização do sector produtivo angolano.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Visão</h3>
              <p>Consolidar-se como empresa líder no mercado angolano de prestação de serviços técnicos especializados, ampliando sua influência regional nos próximos 5 anos.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Valores</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Excelência técnica</li>
                <li>Integridade e transparência</li>
                <li>Inovação contínua</li>
                <li>Desenvolvimento humano</li>
                <li>Responsabilidade ambiental e social</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Nossas Áreas de Actuação</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-10">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`flex flex-col items-center p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 ${
                  selectedService?.id === service.id 
                    ? `bg-gradient-to-r ${service.color} text-white` 
                    : "bg-white border-gray-200 hover:bg-blue-50"
                }`}
              >
                <span className={`text-3xl ${selectedService?.id === service.id ? 'text-white' : 'text-blue-500'}`}>
                  {service.icon}
                </span>
                <span className={`mt-2 text-sm text-center font-medium ${selectedService?.id === service.id ? 'text-white' : ''}`}>
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {selectedService && (
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 animate-fade-in">
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-4 md:mb-0 md:pr-6">
                  <img src={selectedService.image} alt={selectedService.title} className="w-full h-48 object-cover rounded" />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{selectedService.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedService.description}</p>
                </div>
              </div>
            </div>
          )}

          {!selectedService && (
            <div className="text-center text-gray-500 italic mt-8">
              Selecione uma área para ver mais detalhes.
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Entre em contacto</h2>
          <div className="max-w-3xl mx-auto">
            <form action="https://docs.google.com/forms/d/e/1FAIpQLSfY3JQsRZDdGzE2g4Wj6r7FhHkIvKb9eB8U0cOqNp5aKxwQZw/formResponse"  method="POST" target="_blank" className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Nome</label>
                  <input name="entry.1410554144" type="text" className="w-full border border-gray-300 rounded px-4 py-2" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input name="entry.1651570971" type="email" className="w-full border border-gray-300 rounded px-4 py-2" required />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Telefone</label>
                <input name="entry.1716336336" type="tel" className="w-full border border-gray-300 rounded px-4 py-2" required />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Área de Interesse</label>
                <select name="entry.1224713175" className="w-full border border-gray-300 rounded px-4 py-2" required>
                  <option value="">Selecione uma área</option>
                  <option value="Tecnologia da Informação">Tecnologia da Informação</option>
                  <option value="Electricidade Industrial">Electricidade Industrial</option>
                  <option value="Higiene & Segurança">Higiene & Segurança</option>
                  <option value="Consultoria Técnica">Consultoria Técnica</option>
                  <option value="Formação Profissional">Formação Profissional</option>
                  <option value="Comércio Técnico">Comércio Técnico</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Mensagem</label>
                <textarea name="entry.839335098" rows="5" className="w-full border border-gray-300 rounded px-4 py-2" required></textarea>
              </div>
              <button type="submit" className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition w-full md:w-auto">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4">MDM Angola</h3>
              <p className="opacity-80">Prestadora de Serviços e Comércio especializada em soluções técnicas integradas.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className="opacity-80 hover:opacity-100">Início</a></li>
                <li><a href="#sobre" className="opacity-80 hover:opacity-100">Sobre Nós</a></li>
                <li><a href="#servicos" className="opacity-80 hover:opacity-100">Serviços</a></li>
                <li><a href="#projetos" className="opacity-80 hover:opacity-100">Projetos</a></li>
                <li><a href="#contacto" className="opacity-80 hover:opacity-100">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contactos</h3>
              <address className="not-italic opacity-80">
                <p>Rua Exemplo, 123</p>
                <p>Luanda, Angola</p>
                <p>Email: <a href="mailto:danielcamaleaocamaleao@gmail.com" className="hover:underline">danielcamaleaocamaleao@gmail.com</a></p>
                <p>Tel: +244 922 122 304</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm opacity-70">
            © {new Date().getFullYear()} MDM Angola - Todos os direitos reservados.
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}