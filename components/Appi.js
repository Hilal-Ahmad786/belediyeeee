import React, { useState } from 'react';
import '../app/App.css';

function Appi() {
  const [showForm, setShowForm] = useState(false);
  const [başvuruTürü, setBaşvuruTürü] = useState('');
  const [birim, setBirim] = useState('');
  const [kişiselBilgiler, setKişiselBilgiler] = useState({
    isimSoyisim: '',
    tc: '',
    cinsiyet: '',
    cep: '',
    eposta: '',
  });
  const [adresBilgileri, setAdresBilgileri] = useState({
    konum: '', // Haritada seçilen konum
    adres: '', // Seçilen adres
    manuelAdres: '', // Manuel girilen adres
  });
  const [başvuruBilgileri, setBaşvuruBilgileri] = useState({
    konu: '',
    açıklama: '',
    dosya: null, // Seçilen dosya
  });
  const [gönderildiMi, setGönderildiMi] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // Set to true by default

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleBaşvuruTürüChange = (value) => {
    setBaşvuruTürü(value);
    setShowForm(true); // Formu göster
  };

  const handleBirimChange = (e) => {
    setBirim(e.target.value);
  };

  const handleKişiselBilgilerChange = (e) => {
    setKişiselBilgiler({
      ...kişiselBilgiler,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdresChange = (e) => {
    setAdresBilgileri({
      ...adresBilgileri,
      [e.target.name]: e.target.value,
    });
  };

  const handleBaşvuruBilgileriChange = (e) => {
    setBaşvuruBilgileri({
      ...başvuruBilgileri,
      [e.target.name]: e.target.value,
    });
  };

  const handleDosyaChange = (e) => {
    setBaşvuruBilgileri({
      ...başvuruBilgileri,
      dosya: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('başvuruTürü', başvuruTürü);
    formData.append('birim', birim);
    formData.append('kişiselBilgiler', JSON.stringify(kişiselBilgiler));
    formData.append('adresBilgileri', JSON.stringify(adresBilgileri));
    formData.append('başvuruBilgileri', JSON.stringify({
      konu: başvuruBilgileri.konu,
      açıklama: başvuruBilgileri.açıklama,
    }));
    if (başvuruBilgileri.dosya) {
      formData.append('dosya', başvuruBilgileri.dosya);
    }

    try {
      const response = await fetch('/api/basvuru', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setGönderildiMi(true);
      } else {
        console.error('Başvuru gönderilemedi.');
      }
    } catch (error) {
      console.error('Başvuru gönderilirken bir hata oluştu:', error);
    }
  };

  const handleKonumSec = (konum) => {
    setAdresBilgileri({
      ...adresBilgileri,
      konum,
    });
  };

  const handleAdresSec = (adres) => {
    setAdresBilgileri({
      ...adresBilgileri,
      adres,
    });
  };

  return (
    <div className="App">
      <div className={`floating-box ${isOpen ? '' : 'closed'}`}>
        <div className="header">
          <strong>Bursa Smart Assistant</strong>
          <button onClick={toggleForm}>{isOpen ? '-' : '+'}</button>
        </div>
        <div className="content">
          {!showForm && (
            <div>
              <h2>Başvuru Türünüzü Seçin</h2>
              <button onClick={() => handleBaşvuruTürüChange('Talep')}>Talep</button>
              <button onClick={() => handleBaşvuruTürüChange('Şikayet')}>Şikayet</button>
              <button onClick={() => handleBaşvuruTürüChange('Öneri')}>Öneri</button>
            </div>
          )}

          {showForm && (
            <form onSubmit={handleSubmit}>
              <h2>Başvuru Formu</h2>

              <label htmlFor="birim">İlgili Birim:</label>
              <select id="birim" name="birim" value={birim} onChange={handleBirimChange}>
                <option value="Genel Sekreterlik">Genel Sekreterlik</option>
                <option value="Bilgi İşlem">Bilgi İşlem</option>
                <option value="İnsan Kaynakları">İnsan Kaynakları</option>
                <option value="Park Bahçeler">Park Bahçeler</option>
                <option value="Ulaşım">Ulaşım</option>
                <option value="Diğer">Diğer</option>
              </select>

              <h3>Kişisel Bilgiler</h3>
              <input
                type="text"
                name="isimSoyisim"
                placeholder="İsim Soy İsim"
                value={kişiselBilgiler.isimSoyisim}
                onChange={handleKişiselBilgilerChange}
              />
              <input
                type="text"
                name="tc"
                placeholder="TC Kimlik No"
                value={kişiselBilgiler.tc}
                onChange={handleKişiselBilgilerChange}
              />
              <select
                name="cinsiyet"
                value={kişiselBilgiler.cinsiyet}
                onChange={handleKişiselBilgilerChange}
              >
                <option value="Erkek">Erkek</option>
                <option value="Kadın">Kadın</option>
              </select>
              <input
                type="tel"
                name="cep"
                placeholder="Cep Telefonu"
                value={kişiselBilgiler.cep}
                onChange={handleKişiselBilgilerChange}
              />
              <input
                type="email"
                name="eposta"
                placeholder="E-posta Adresi"
                value={kişiselBilgiler.eposta}
                onChange={handleKişiselBilgilerChange}
              />

              <h3>Adres Bilgileri</h3>
              <button type="button" onClick={() => handleKonumSec('Haritada Konum')}>Konum Seç</button>
              <button type="button" onClick={() => handleAdresSec('Adres Listesi')}>Adres Seç</button>
              <input
                type="text"
                name="manuelAdres"
                placeholder="Adres Girmek İstemiyorum"
                value={adresBilgileri.manuelAdres}
                onChange={handleAdresChange}
              />

              <h3>Başvuru Bilgileri</h3>
              <textarea
                name="konu"
                placeholder="Talep/Şikayet/Öneri Konusu"
                value={başvuruBilgileri.konu}
                onChange={handleBaşvuruBilgileriChange}
              />
              <textarea
                name="açıklama"
                placeholder="Talep/Şikayet/Öneri Açıklaması"
                value={başvuruBilgileri.açıklama}
                onChange={handleBaşvuruBilgileriChange}
              />
              <input type="file" name="dosya" onChange={handleDosyaChange} />

              <button type="submit">Gönder</button>
            </form>
          )}

          {gönderildiMi && (
            <div>Başvurunuz başarıyla gönderildi!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Appi;
