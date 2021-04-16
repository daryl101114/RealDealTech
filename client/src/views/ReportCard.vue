<template>
    <div>
        <p>hi</p>
        <button @click="createPDF">createPDF</button>
    </div>
    
</template>

<script>
import jsPDF from 'jspdf'

export default {
    methods: {
  createPDF () {
    let pdfName = 'test'; 
    var doc = new jsPDF();
    doc.text("Hello World", 10, 10);
    doc.save(pdfName + '.pdf');
  }
}
}
</script>

<style>

</style>