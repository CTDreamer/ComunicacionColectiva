<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comunicación Colectiva en MPI</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
            color: white;
            padding: 40px 0;
        }

        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .header p {
            font-size: 1.2em;
            opacity: 0.9;
        }

        .content-card {
            background: white;
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }

        .content-card:hover {
            transform: translateY(-5px);
        }

        .section-title {
            color: #667eea;
            font-size: 1.8em;
            margin-bottom: 20px;
            border-bottom: 3px solid #667eea;
            padding-bottom: 10px;
        }

        .comparison-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 20px 0;
        }

        .comparison-item {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 20px;
            border-radius: 10px;
            border-left: 5px solid #667eea;
        }

        .comparison-item h3 {
            color: #667eea;
            margin-bottom: 10px;
        }

        .code-container {
            background: #2d3748;
            color: #f7fafc;
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            overflow-x: auto;
            position: relative;
        }

        .code-header {
            background: #4a5568;
            margin: -20px -20px 15px -20px;
            padding: 10px 20px;
            border-radius: 10px 10px 0 0;
            font-weight: bold;
            color: #e2e8f0;
        }

        .code-container code {
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
            line-height: 1.4;
        }

        .highlight {
            background: linear-gradient(120deg, #a8edea 0%, #fed6e3 100%);
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: bold;
        }

        .function-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }

        .function-card {
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
            padding: 20px;
            border-radius: 10px;
            border: 1px solid #e2e8f0;
        }

        .function-card h4 {
            color: #c53030;
            margin-bottom: 10px;
            font-size: 1.2em;
        }

        .visual-diagram {
            background: white;
            border: 2px solid #667eea;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
        }

        .process-visual {
            display: inline-block;
            width: 60px;
            height: 60px;
            background: #667eea;
            color: white;
            border-radius: 50%;
            line-height: 60px;
            margin: 10px;
            font-weight: bold;
            position: relative;
        }

        .arrow {
            display: inline-block;
            margin: 0 10px;
            font-size: 1.5em;
            color: #667eea;
        }

        .benefits-list {
            background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%);
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
        }

        .benefits-list ul {
            list-style: none;
            padding: 0;
        }

        .benefits-list li {
            padding: 8px 0;
            position: relative;
            padding-left: 25px;
        }

        .benefits-list li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #22543d;
            font-weight: bold;
        }

        @media (max-width: 768px) {
            .comparison-grid {
                grid-template-columns: 1fr;
            }
            
            .header h1 {
                font-size: 2em;
            }
            
            .content-card {
                padding: 20px;
            }
        }

        .interactive-demo {
            background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            text-align: center;
        }

        .demo-button {
            background: #667eea;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 1em;
            margin: 10px;
            transition: all 0.3s ease;
        }

        .demo-button:hover {
            background: #5a67d8;
            transform: scale(1.05);
        }

        .demo-output {
            background: white;
            padding: 15px;
            border-radius: 8px;
            margin-top: 15px;
            font-family: monospace;
            text-align: left;
            max-height: 200px;
            overflow-y: auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Comunicación Colectiva en MPI</h1>
            <p>Evolución desde comunicación punto a punto hacia operaciones colectivas eficientes</p>
        </div>

        <div class="content-card">
            <h2 class="section-title">Introducción: Del Código Base a la Comunicación Colectiva</h2>
            <p>El código que analizamos implementa <span class="highlight">comunicación punto a punto</span> en MPI usando tipos de datos derivados para transmitir la parte triangular superior de una matriz. Aunque es efectivo para dos procesos, cuando escalamos a múltiples procesos, la <span class="highlight">comunicación colectiva</span> se vuelve fundamental.</p>
            
            <div class="comparison-grid">
                <div class="comparison-item">
                    <h3>🔄 Comunicación Punto a Punto (Tu código)</h3>
                    <p>Utiliza MPI_Send/MPI_Recv entre dos procesos específicos. Ideal para intercambios directos y tipos de datos personalizados como la matriz triangular superior.</p>
                </div>
                <div class="comparison-item">
                    <h3>🌐 Comunicación Colectiva</h3>
                    <p>Involucra a todos los procesos simultáneamente en operaciones como broadcast, reduce, gather, etc. Optimizada para múltiples procesos.</p>
                </div>
            </div>
        </div>

        <div class="content-card">
            <h2 class="section-title">Análisis del Código Base</h2>
            <div class="code-container">
                <div class="code-header">Código Original - Comunicación Punto a Punto</div>
                <code>
// Tu código crea un tipo de datos personalizado
MPI_Datatype generar_tipo_triangular_superior(int dimension) {
    MPI_Datatype tipo_triang_sup;
    int* longitudes_bloques = (int*)malloc(dimension * sizeof(int));
    int* desplazamientos = (int*)malloc(dimension * sizeof(int));
    
    for (int fila = 0; fila < dimension; fila++) {
        longitudes_bloques[fila] = dimension - fila;  // Elementos por fila
        desplazamientos[fila] = (fila * dimension) + fila;  // Offset
    }
    
    MPI_Type_indexed(dimension, longitudes_bloques, desplazamientos, MPI_INT, &tipo_triang_sup);
    MPI_Type_commit(&tipo_triang_sup);
    return tipo_triang_sup;
}

// Comunicación entre dos procesos específicos
MPI_Send(matriz, 1, tipo_triang_sup, PROCESO_DESTINO, ETIQUETA_MENSAJE, MPI_COMM_WORLD);
MPI_Recv(matriz_recibida, 1, tipo_triang_sup, PROCESO_ORIGEN, ETIQUETA_MENSAJE, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
                </code>
            </div>
        </div>

        <div class="content-card">
            <h2 class="section-title">Principales Funciones de Comunicación Colectiva</h2>
            <div class="function-grid">
                <div class="function-card">
                    <h4>MPI_Bcast - Broadcast</h4>
                    <p>Un proceso envía los mismos datos a todos los demás procesos en el comunicador.</p>
                    <div class="visual-diagram">
                        <div class="process-visual">0</div>
                        <div class="arrow">→</div>
                        <div class="process-visual">1</div>
                        <div class="process-visual">2</div>
                        <div class="process-visual">3</div>
                    </div>
                </div>

                <div class="function-card">
                    <h4>MPI_Gather - Recopilar</h4>
                    <p>Un proceso recopila datos de todos los procesos en un solo buffer.</p>
                    <div class="visual-diagram">
                        <div class="process-visual">1</div>
                        <div class="process-visual">2</div>
                        <div class="process-visual">3</div>
                        <div class="arrow">→</div>
                        <div class="process-visual">0</div>
                    </div>
                </div>

                <div class="function-card">
                    <h4>MPI_Scatter - Distribuir</h4>
                    <p>Un proceso distribuye diferentes partes de sus datos a todos los procesos.</p>
                    <div class="visual-diagram">
                        <div class="process-visual">0</div>
                        <div class="arrow">→</div>
                        <div class="process-visual">1</div>
                        <div class="process-visual">2</div>
                        <div class="process-visual">3</div>
                    </div>
                </div>

                <div class="function-card">
                    <h4>MPI_Reduce - Reducir</h4>
                    <p>Combina datos de todos los procesos usando una operación (suma, máximo, etc.).</p>
                    <div class="visual-diagram">
                        <div class="process-visual">1</div>
                        <div class="process-visual">2</div>
                        <div class="process-visual">3</div>
                        <div class="arrow">⊕→</div>
                        <div class="process-visual">0</div>
                    </div>
                </div>

                <div class="function-card">
                    <h4>MPI_Allreduce - Todo-Reducir</h4>
                    <p>Como MPI_Reduce, pero el resultado se distribuye a todos los procesos.</p>
                    <div class="visual-diagram">
                        <div class="process-visual">0</div>
                        <div class="process-visual">1</div>
                        <div class="arrow">⊕↔</div>
                        <div class="process-visual">2</div>
                        <div class="process-visual">3</div>
                    </div>
                </div>

                <div class="function-card">
                    <h4>MPI_Allgather - Todo-Recopilar</h4>
                    <p>Cada proceso recopila datos de todos los demás procesos.</p>
                    <div class="visual-diagram">
                        <div class="process-visual">0</div>
                        <div class="process-visual">1</div>
                        <div class="arrow">↔</div>
                        <div class="process-visual">2</div>
                        <div class="process-visual">3</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-card">
            <h2 class="section-title">Evolución: Tu Código con Comunicación Colectiva</h2>
            <p>Veamos cómo tu código de matriz triangular superior se puede extender usando comunicación colectiva:</p>
            
            <div class="code-container">
                <div class="code-header">Extensión con MPI_Bcast - Distribuyendo la Matriz</div>
                <code>
// Basado en tu función generar_tipo_triangular_superior
if (rango_proceso == 0) {
    // Proceso root inicializa la matriz
    int* matriz = crear_matriz(dimension_matriz, 1);
    printf("Proceso 0 broadcasting matriz triangular superior...\n");
    mostrar_matriz(matriz, dimension_matriz);
    
    // Broadcast usando tu tipo de datos personalizado
    MPI_Bcast(matriz, 1, tipo_triang_sup, 0, MPI_COMM_WORLD);
} else {
    // Todos los demás procesos reciben
    int* matriz = crear_matriz(dimension_matriz, 0);
    MPI_Bcast(matriz, 1, tipo_triang_sup, 0, MPI_COMM_WORLD);
    
    printf("Proceso %d recibió matriz triangular superior\n", rango_proceso);
    mostrar_matriz(matriz, dimension_matriz);
}
                </code>
            </div>

            <div class="code-container">
                <div class="code-header">Con MPI_Gather - Recopilando Resultados</div>
                <code>
// Cada proceso procesa una fila de la matriz triangular
int fila_proceso = rango_proceso;
if (fila_proceso < dimension_matriz) {
    // Procesar elementos de la fila triangular superior
    int elementos_fila = dimension_matriz - fila_proceso;
    int* resultado_fila = (int*)malloc(elementos_fila * sizeof(int));
    
    // Procesamiento local (ejemplo: multiplicar por 2)
    for (int j = 0; j < elementos_fila; j++) {
        resultado_fila[j] = matriz[(fila_proceso * dimension_matriz) + fila_proceso + j] * 2;
    }
    
    // Recopilar resultados en proceso 0
    int* todos_resultados = NULL;
    if (rango_proceso == 0) {
        todos_resultados = (int*)malloc(total_elementos_triangular * sizeof(int));
    }
    
    MPI_Gather(resultado_fila, elementos_fila, MPI_INT,
               todos_resultados, elementos_fila, MPI_INT, 0, MPI_COMM_WORLD);
}
                </code>
            </div>
        </div>

        <div class="content-card">
            <h2 class="section-title">Ventajas de la Comunicación Colectiva</h2>
            <div class="benefits-list">
                <ul>
                    <li><strong>Eficiencia Optimizada:</strong> Las implementaciones MPI optimizan estas operaciones para la topología de red específica</li>
                    <li><strong>Simplicidad de Código:</strong> Una sola llamada reemplaza múltiples operaciones punto a punto</li>
                    <li><strong>Sincronización Implícita:</strong> Las operaciones colectivas sincronizan automáticamente los procesos</li>
                    <li><strong>Escalabilidad:</strong> Funcionan eficientemente desde 2 hasta miles de procesos</li>
                    <li><strong>Portabilidad:</strong> Optimizadas para diferentes arquitecturas de hardware</li>
                    <li><strong>Reducción de Errores:</strong> Menos código manual significa menos posibilidades de errores</li>
                </ul>
            </div>
        </div>

        <div class="content-card">
            <h2 class="section-title">Demostración Interactiva</h2>
            <div class="interactive-demo">
                <h3>Simulación de Comunicación Colectiva</h3>
                <p>Simula diferentes patrones de comunicación basados en tu matriz triangular superior:</p>
                
                <button class="demo-button" onclick="simularBroadcast()">Simular MPI_Bcast</button>
                <button class="demo-button" onclick="simularGather()">Simular MPI_Gather</button>
                <button class="demo-button" onclick="simularReduce()">Simular MPI_Reduce</button>
                <button class="demo-button" onclick="limpiarDemo()">Limpiar</button>
                
                <div id="demo-output" class="demo-output" style="display: none;"></div>
            </div>
        </div>

        <div class="content-card">
            <h2 class="section-title">Comparación de Rendimiento</h2>
            <div class="comparison-grid">
                <div class="comparison-item">
                    <h3>📊 Punto a Punto (Tu código)</h3>
                    <p><strong>Complejidad:</strong> O(n) para n procesos<br>
                    <strong>Mensajes:</strong> n-1 mensajes secuenciales<br>
                    <strong>Uso:</strong> Comunicación específica entre procesos</p>
                </div>
                <div class="comparison-item">
                    <h3>🚀 Comunicación Colectiva</h3>
                    <p><strong>Complejidad:</strong> O(log n) para muchas operaciones<br>
                    <strong>Mensajes:</strong> Optimizado por la implementación MPI<br>
                    <strong>Uso:</strong> Operaciones que involucran múltiples procesos</p>
                </div>
            </div>
        </div>

        <div class="content-card">
            <h2 class="section-title">Conclusión</h2>
            <p>Tu código de comunicación punto a punto con tipos de datos derivados es una excelente base que demuestra conceptos fundamentales de MPI. La <span class="highlight">comunicación colectiva</span> extiende estos conceptos para aplicaciones de mayor escala, manteniendo la flexibilidad de trabajar con tipos de datos personalizados como tu matriz triangular superior.</p>
            
            <p>La combinación de ambos enfoques - tipos de datos derivados para estructuras complejas y comunicación colectiva para coordinación eficiente - forma la base de aplicaciones MPI robustas y escalables.</p>
        </div>
    </div>

    <script>
        function simularBroadcast() {
            const output = document.getElementById('demo-output');
            output.style.display = 'block';
            output.innerHTML = `
<strong>MPI_Bcast Simulation - Matriz Triangular Superior</strong>
Proceso 0: Enviando matriz triangular [0,1,2,3,5,6,7,11,12,15]
Proceso 1: ✓ Recibido matriz triangular
Proceso 2: ✓ Recibido matriz triangular  
Proceso 3: ✓ Recibido matriz triangular
Proceso 4: ✓ Recibido matriz triangular

Resultado: Todos los procesos tienen la misma matriz triangular superior
Tiempo simulado: O(log n) vs O(n) punto a punto
            `;
        }

        function simularGather() {
            const output = document.getElementById('demo-output');
            output.style.display = 'block';
            output.innerHTML = `
<strong>MPI_Gather Simulation - Procesamiento Distribuido</strong>
Proceso 0: Fila 0 -> [0, 2, 4, 6] (elementos * 2)
Proceso 1: Fila 1 -> [10, 12, 14] (elementos * 2)  
Proceso 2: Fila 2 -> [24, 30] (elementos * 2)
Proceso 3: Fila 3 -> [30] (elementos * 2)

Proceso 0 recopila:
  Fila 0: [0, 2, 4, 6]
  Fila 1: [10, 12, 14] 
  Fila 2: [24, 30]
  Fila 3: [30]

Resultado: Matriz triangular procesada distribuida y recopilada
            `;
        }

        function simularReduce() {
            const output = document.getElementById('demo-output');
            output.style.display = 'block';
            output.innerHTML = `
<strong>MPI_Reduce Simulation - Suma de Elementos Triangulares</strong>
Proceso 0: Suma fila 0 = 0+1+2+3 = 6
Proceso 1: Suma fila 1 = 5+6+7 = 18
Proceso 2: Suma fila 2 = 10+11 = 21  
Proceso 3: Suma fila 3 = 15

MPI_Reduce con MPI_SUM:
Proceso 0 recibe suma total = 6 + 18 + 21 + 15 = 60

Resultado: Suma total de todos los elementos de la matriz triangular superior
Operación: Distribuida y eficiente usando árboles binarios
            `;
        }

        function limpiarDemo() {
            const output = document.getElementById('demo-output');
            output.style.display = 'none';
            output.innerHTML = '';
        }

        // Animaciones suaves al cargar
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.content-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });
    </script>
</body>
</html>
