# Parámetros:

id (number)

Nombre y apellidos (1 o 2 atributos char o varchar)

Fecha de nacimiento (date)

Temperatura (real)
    (En tabla aparte, se apuntan las 3 medidas diarias)

Dias o fecha del inicio (int) o (date)

Necesita respirador (Si/No)

Genero (char)

Peso (real)

Altura (real)

Presión arterial sistólica (int)
    (120 normal/140 hipertensión | 3 veces al dia)

Presión arterial diastótica (int) 
    (80 normal/90 hipertensión | 3 veces al dia)

Patologías previas (*Por definir*) (Varchar de longitud predeterminada)
    (Patologías pulmonares / Patologías cardiacas / Hipertensión (Antes) / Problemas coagulación (¿Qué tipo?) / Obesidad (Peso y altura para ver que tipo (esto puede ser otra tabla aparte))

Dimero D (real)
    (100 bien - 500 malo)

Ferritina (real)
    (Depende de si eres hombre (de 24 a 336) o mujer (de 11 a 307), se puede hacer en otra tabla)

linfocitos en sangre (int)
    (De 500 a 1200 es normal - menos de 200 (VIH o inmunodeficiencias) - de 250 a 500 (sistema inmunológico débil o posible VIH)

Proteína C. Reactiva (real)
    (Normal > 10 - Vejez aproximadamente 10 - Gestación/Infecciones virales (10-40) - Proceso inflamatorio activo/Infección bacteriana (40-200) - Infecciones bacterianas severas/Quemaduras (>200))

Fibrinógeno (real)
    (Si es en (g/L) de 2 a 4 es normal, otas unidades es lo mismo pero transformando)

Rx de Tórax (Datos definidos):
    (*Sugestivos*)
    -opacidad focal
    -Tenue opacidad focal
    -Tenue aumento de densidad difuso
    -Patrón alveolo-intersticial

    (*No sugestivos*)
    -Consolidación
    -Adenopatias
    -Derrame pleural
    -Nodulo pulmonar
    -Derrame pleural en cisura

    (Si > 3, conveniente ingreso del paciente (posible factor de mala evolución))
    a) Sin lesiones (0ptos)
    b) Unilateral con menos de 3 lesiones de cualquier tipo o menos de 3 campos pulmonares afectados (1ptos)
    c)Unilateral con 3 o más lesiones de cualquier tipo o los 3 campos pulmonares afectados (3ptos)
    d)Bilateral b+b (2ptos) (ptos), b+c (4ptos), c+c (6ptos)
    e)+1 punto si entre ambos pulmones están afectados más de tres campos pulmonares
    f)+1 si existe consolidación (neumonía bacteriana o coinfección), adeopatías o derrame pleural, o en su seguimiento evolución de Sindrome de Distress Respiratorio Agudo (SDRA)

Saturación de oxígeno (real)
    
    Si pulso de oxígeno % (%) (3 VECES AL DÍA)
    (Normal (80-100 (mmHg) - De 95%-100% problemas - >90% hipoxemia)
    Medios (Datos definidos):
        
        -Espontánea
        -Gafas nasales
        -Mascarilla
        -Mascarilla con reservorio
        -Optiflow
        -Ventilación mecánica
        
        
#### EXTRAS A DEBATIR
        
       - Casilla delegable con (DNI, Pasaporte, Otro)
       - Casilla default null para meter los datos de identidad
