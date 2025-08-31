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

## After optimization

### - Sorting a column:

- **Commit Duration:2.2s**
- **Render Duration: 22.6ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions)

### - Screenshots:

#### Flame Graph for sorting

![Flame Graph sorting](public/img/after/flame-sort.jpg)

#### Ranked Chart for sorting

![Ranked Chart sorting](public/img/after/ranked-sort.jpg)

### - Searching for a country:

- **Commit Duration: 1.9s**
- **Render Duration: 76.3ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions)

### - Screenshots:

#### Flame Graph for search

![Flame Graph search](public/img/after/flame-search.jpg)

#### Ranked Chart for search

![Ranked Chart search](public/img/after/ranked-search.jpg)

### - Selecting a year:

- **Commit Duration: 2.5s**
- **Render Duration: 329.9ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions)

### - Screenshots:

#### Flame Graph for year

![Flame Graph year](public/img/after/flame-year.jpg)

#### Ranked Chart for year

![Ranked Chart year](public/img/after/ranked-year.jpg)

### - Adding/removing columns:

- **Commit Duration: 1.1s**
- **Render Duration: 29.4ms**
- **Interactions:** Not recorded (Profiler did not capture explicit interactions)

### - Screenshots:

#### Flame Graph for columns

![Flame Graph columns](public/img/after/flame-columns.jpg)

#### Ranked Chart for columns

![Ranked Chart columns](public/img/after/ranked-columns.jpg)
