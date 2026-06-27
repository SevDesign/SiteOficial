document.getElementById('formAudiovisualRapido').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nomeAudio').value;
    const whats = document.getElementById('whatsAudio').value;
    const insta = document.getElementById('instaAudio').value;
    
    const msg = `Olá! Quero elevar o nível das minhas captações.\n👤 Nome: ${nome}\n📱 WhatsApp: ${whats}\n📸 Instagram: @${insta}\n🎬 Interesse: Produção de Autoridade (Audiovisual)`;
    window.open(`https://wa.me/5588999999999?text=${encodeURIComponent(msg)}`, '_blank');
});