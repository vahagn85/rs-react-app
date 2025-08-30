# Task: React Performance

CO2 emissions data by countries

## Performance Profiling

Initial profiling was performed using **React DevTools Profiler**.

- **Tested interactions:**
  - Sorting a column
  - Searching for a country
  - Selecting a year
  - Adding/removing columns

## Before optimization

### - Sorting a column:

- **Commit Duration: 8.6s**
- **Render Duration: 485ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions)

### - Screenshots:

#### Flame Graph for sorting

![Flame Graph](public/img/before/flame-sort.jpg)

#### Ranked Chart for sorting

![Ranked Chart](public/img/before/ranked-sort.jpg)

### - Searching for a country:

- **Commit Duration: 4.8s**
- **Render Duration: 477.5ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions)

### - Screenshots:

#### Flame Graph for search

![Flame Graph](public/img/before/flame-search.jpg)

#### Ranked Chart for search

![Ranked Chart](public/img/before/ranked-search.jpg)

### - Selecting a year:

- **Commit Duration: 3.3s**
- **Render Duration: 586.5ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions)

### - Screenshots:

#### Flame Graph for year

![Flame Graph](public/img/before/flame-year.jpg)

#### Ranked Chart for year

![Ranked Chart](public/img/before/ranked-year.jpg)

### - Adding/removing columns:

- **Commit Duration: 2s**
- **Render Duration: 389.4ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions)

### - Screenshots:

#### Flame Graph for columns

![Flame Graph](public/img/before/flame-columns.jpg)

#### Ranked Chart for columns

![Ranked Chart](public/img/before/ranked-columns.jpg)
