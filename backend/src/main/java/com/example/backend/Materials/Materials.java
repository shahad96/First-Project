package com.example.backend.Materials;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

import static java.util.Calendar.DATE;

@Entity
@Table(name = "materials")
public class Materials {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "monitor_date is mandatory")
    private String monitor_date;

    @NotBlank(message = "language is mandatory")
    private String language;

    @NotBlank(message = "section is mandatory")
    private String section;

    @Length(max = 100)
    private String url;

    @Length(max = 50)
    private String author;

    private String file;

    @Length(max = 150)
    private String title;

    @Length(max = 1000)
    private String content;

    public Materials() {
    }

    public Materials(Long id, String monitor_date, String language,
                     String section, String url, String author,
                     String file, String title, String content) {
        this.id = id;
        this.monitor_date = monitor_date;
        this.language = language;
        this.section = section;
        this.url = url;
        this.author = author;
        this.file = file;
        this.title = title;
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMonitor_date() {
        return monitor_date;
    }

    public void setMonitor_date(String monitor_date) {
        this.monitor_date = monitor_date;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
